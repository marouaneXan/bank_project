import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { Transaction } from '../../interface/transaction';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent {
  step: number = 0
  constructor(private toastr: ToastrService) { }
  transactionForm = new FormGroup({
    formId: new FormControl(null, [Validators.required]),
    toId: new FormControl(null, [Validators.required]),
    agentId: new FormControl(null, [Validators.required]),
    amount: new FormControl(null, [Validators.required]),
  })
  nextStep() {
    const { value }: any = this.transactionForm;
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
  }
}
