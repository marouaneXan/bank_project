import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent {
  step: number = 0
  transactionForm = new FormGroup({
    formId: new FormControl(null, [Validators.required]),
    toId: new FormControl(null, [Validators.required]),
    // AgentId: new FormControl(null, [Validators.required]),
    Amount: new FormControl(null, [Validators.required]),
  })
  nextStep() {
    this.step++
  }
  previousStep() {
    this.step--
  }
}
