import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Transaction } from '../interface/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private endpoint = "http://localhost:3000"
  constructor(private http: HttpClient) { }
  addTransaction(data: Transaction) {
    return this.http.post(this.endpoint + '/transactions', data).pipe(
      catchError((error: any) => {
        return throwError('Error on making new transaction');
      })
    );
  }
  getListTransaction() {
    try {
      return this.http.get(`${this.endpoint}/transactions`)
    } catch (error) {
      return throwError(error);

    }
  }
  deleteTransaction(transaction_id: string) {
    return this.http.delete(`${this.endpoint}/transactions/${transaction_id}`).pipe(
      catchError((error: any) => {
        return throwError('Error on deleting transaction');
      })
    );
  }
}
