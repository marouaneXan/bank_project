import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { catchError, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private connections: Map<string, WebSocketSubject<any>> = new Map();

  constructor() { }

  connect(url: string): WebSocketSubject<any> {
    if (!this.connections.has(url) || this.connections.get(url)!.closed) {
      const socket$ = webSocket(url);
      this.connections.set(url, socket$);

      socket$.pipe(
        tap({
          error: (error) => console.log('WebSocket connection error: ', error),
          complete: () => console.log('WebSocket connection closed')
        }),
        catchError((_) => {
          this.connections.delete(url);
          return EMPTY;
        })
      ).subscribe();
      return socket$;
    }
    return this.connections.get(url)!;
  }
  sendMessage(url: string, message: any): void {
    this.connections.get(url)?.next(message);
  }
  close(url: string): void {
    this.connections.get(url)?.complete();
    this.connections.delete(url);
  }
}
