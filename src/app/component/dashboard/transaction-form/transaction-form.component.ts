import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnInit {

  wizardUtil : any = {
    step: 1,
    stepCount: 3,
  }

  WizardForm = new FormGroup({
    name: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    rib : new FormControl(''),
    amount : new FormControl(''),
  })

  nextStep() {
    console.log(this.wizardUtil.step);
    this.wizardUtil.step++;
  }
  previousStep() {
    console.log(this.wizardUtil.step);
    if (this.wizardUtil.step > 1)
      this.wizardUtil.step--;
  }
  constructor() { }

  ngOnInit(): void {
  }
}
