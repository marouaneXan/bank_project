import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';
import { Transaction } from '../interface/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private endpoint = "https://api-2445584170597.production.gw.apicast.io:443"
  private deletedTransactions = 0;
  private addedTransactions = 0;
  constructor(private http: HttpClient) { }
  addTransaction(data: Transaction) {
    return this.http.post(`${this.endpoint}`, data).pipe(
      tap(() => this.addedTransactions++),
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
      tap(() => this.deletedTransactions++),
      catchError((error: any) => {
        return throwError('Error on deleting transaction');
      })
    );
  }
  getDeletedTransactionCount(): number {
    return this.deletedTransactions;
  }
  getAddedTransactionCount(): number {
    return this.addedTransactions;
  }
  serverUpDown() {
    return this.http.get(`${this.endpoint}/actuator/health`)
  }
}
