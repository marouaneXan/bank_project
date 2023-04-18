import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { saveAs } from 'file-saver';
import { TransactionService } from '../../services/transaction.service';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent {
  step: number = 0
  isLoading: boolean = false
  success: boolean = false
  constructor(private toastr: ToastrService, private transactionService: TransactionService, private loadingService: LoadingService) { }
  transactionForm = new FormGroup({
    sourceAccount: new FormControl(null, [Validators.required]),
    destinationAccount: new FormControl(null, [Validators.required]),
    agentId: new FormControl(localStorage.getItem('agent_id'), [Validators.required]),
    amount: new FormControl(null, [Validators.required]),
  })
  nextStep() {
    const { value }: FormGroup = this.transactionForm;
    const fields = ['sourceAccount', 'destinationAccount', 'amount', 'agentId'];

    if (fields.some(field => !value[field])) {
      this.toastr.warning('Please add all fields');
    } else {
      this.step++;
    }
  }
  previousStep() {
    this.step--
  }
  makeTransaction(transactionForm: FormGroup) {
    console.log(transactionForm.value);
    if (!transactionForm.valid) {
      this.toastr.warning('Please add fields')
    } else {
      this.isLoading = true
      this.loadingService.show()
      this.transactionService.addTransaction(transactionForm.value).subscribe(
        res => {
          this.isLoading = false
          this.success = true
          this.loadingService.hide()
          this.transactionForm.reset()
          this.step++
        },
        err => {
          console.log(err);
          this.isLoading = false
          this.success = false
          this.loadingService.hide()
        }
      )
    }
    // this.downloadCsv(transactionForm.value)
  }
  convertToCsv(data: any[]): string {
    const separator = ',';
    const keys = Object.keys(data[0]);
    let csv = keys.join(separator) + '\n';
    data.forEach(item => {
      const values = keys.map(key => item[key]);
      csv += values.join(separator) + '\n';
    });
    return csv;
  }
  downloadCsv(myData: any) {
    if (!myData) {
      this.toastr.error('No data to download');
      return;
    } else {
      console.log(myData);
      const csvData = this.convertToCsv([myData]);
      const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
      saveAs(blob, 'data.csv');
    }
  }
}
