import { Component, OnDestroy } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-transactions',
  templateUrl: './list-transactions.component.html',
  styleUrls: ['./list-transactions.component.css'],
})
export class ListTransactionsComponent implements OnDestroy {
  listTransaction: any;
  isLoading: boolean = false;
  success: boolean = false;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  modalDeleteTransaction: boolean = false
  transactionSelected: any

  constructor(
    private transactionService: TransactionService,
    private loadingService: LoadingService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.dtOption()
    this.getListTransaction();
  }

  getListTransaction(): void {
    this.isLoading = true
    this.loadingService.show()
    this.transactionService.getListTransaction().subscribe(
      (Transaction) => {
        this.listTransaction = Transaction;
        this.isLoading = false
        this.loadingService.hide()
        this.dtTrigger.next(this.listTransaction);
        this.hasLoaded();
      },
      (e) => {
        this.isLoading = false
        this.loadingService.hide()
        this.error(e)
      }
    );
  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }
  togglemodalDeleteTransaction(): void {
    this.modalDeleteTransaction = !this.modalDeleteTransaction
  }
  dtOption() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
    };
  }
  hasLoaded() {
    this.success = true;
  }
  error(error: any) {
    this.success = false;
    this.toastr.error('Error: ' + error.message);
  }
}
