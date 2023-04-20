import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Transaction } from '../interface/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private endpoint = "http://localhost:3000"
  constructor(private http: HttpClient) { }
  addTransaction(data: any) {
    data["agentId"] = "123"
    return this.http.post("https://eai-api.serveo.net/api/virements", data).pipe(
      catchError((error: any) => {
        return throwError('Error on making new transaction');
      })
    );
  }
  getListTransaction() {
    try {
      return this.http.get(`https://eai-api.serveo.net/api/virements`)
    } catch (error) {
      return throwError(error);

    }
  }
  deleteTransaction(transaction_id: string) {
    return this.http.delete(`https://eai-api.serveo.net/api/virements/${transaction_id}`).pipe(
      catchError((error: any) => {
        return throwError('Error on deleting transaction');
      })
    );
  }
  serverUpDown() {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('access_token')}`);
    return this.http.get('https://bff.serveo.net/actuator/health', {
      headers
    })
  }
}
