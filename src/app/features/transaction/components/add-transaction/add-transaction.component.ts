import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent {
  step: number = 2
  constructor(private toastr: ToastrService) { }
  transactionForm = new FormGroup({
    formId: new FormControl(null, [Validators.required]),
    toId: new FormControl(null, [Validators.required]),
    amount: new FormControl(null, [Validators.required]),
  })
  nextStep() {
    const { value }: FormGroup = this.transactionForm;
    const fields = ['formId', 'toId', 'agentId', 'amount'];

    if (fields.some(field => !value[field])) {
      this.toastr.error('Please add all fields');
    } else {
      this.step++;
    }
  }
  previousStep() {
    this.step--
  }
  makeTransaction(transactionForm: FormGroup) {
    console.log(transactionForm.value);
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
