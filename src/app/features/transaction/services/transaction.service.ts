import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Transaction } from '../interface/transaction';
import { WebSocketService } from 'src/app/core/services/websocket.service';
import { envirenment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  constructor(private http: HttpClient, private wsService: WebSocketService) { }
  addTransaction(data: Transaction) {
    return this.http.post(envirenment.BASE_URL, data).pipe(
      catchError((error: any) => {
        return throwError('Error on making new transaction');
      })
    );
  }
  getListTransaction() {
    try {
      return this.http.get(envirenment.BASE_URL)
    } catch (error) {
      return throwError(error);
    }
  }
  deleteTransaction(transaction_id: number) {
    return this.http.delete(`${envirenment.BASE_URL}/${transaction_id}`).pipe(
      catchError((error: any) => {
        return throwError('Error on deleting transaction');
      })
    );
  }
  getTotalTransactions() {
    return this.wsService.connect(envirenment.WS_URL + '/total');
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
