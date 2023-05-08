import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, catchError, tap, throwError } from 'rxjs';
import { Transaction } from '../interface/transaction';
import { WebSocketService } from 'src/app/core/services/websocket.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private endpoint = "https://api-2445584170597.production.gw.apicast.io:443"
  private wsUrl = 'wss://bff.serveo.net';
  constructor(private http: HttpClient, private wsService: WebSocketService) { }
  addTransaction(data: Transaction) {
    return this.http.post(`${this.endpoint}`, data).pipe(
      catchError((error: any) => {
        return throwError('Error on making new transaction');
      })
    );
  }
  getListTransaction() {
    try {
      return this.http.get(`${this.endpoint}`)
    } catch (error) {
      return throwError(error);

    }
  }
  deleteTransaction(transaction_id: number) {
    return this.http.delete(`${this.endpoint}/${transaction_id}`).pipe(
      catchError((error: any) => {
        return throwError('Error on deleting transaction');
      })
    );
  }
  getTotalTransactions() {
    return this.wsService.connect(this.wsUrl + '/total');
  }
  getTodayTransactionCount(transactions: Transaction[]): number {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayTransactions = transactions.filter(transaction => {
      if (transaction.dateCreated) {
        const transactionDate = new Date(transaction.dateCreated);
        transactionDate.setHours(0, 0, 0, 0);
        return transactionDate.getTime() === today.getTime();
      }
      return false;
    });
    return todayTransactions.length;
  }
}
