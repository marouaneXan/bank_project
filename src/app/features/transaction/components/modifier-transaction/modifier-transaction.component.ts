import { Component, Input } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modifier-transaction',
  templateUrl: './modifier-transaction.component.html',
  styleUrls: ['./modifier-transaction.component.css'],
})
export class ModifierTransactionComponent {
  @Input() title: string = '';
  @Input() transactionData: any = [];
  editform!: FormGroup;
  constructor(
    private transactionService: TransactionService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.editform = new FormGroup({
      sourceAccount: new FormControl('', [Validators.required]),
      destinationAccount: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
      fromId: new FormControl('', [Validators.required]),
      toId: new FormControl('', [Validators.required]),
    });
  }
  get f() {
    return this.editform.controls;
  }
  submit() {
    try {
      this.transactionService.updateTransaction(
        this.transactionData.id,
        this.editform.value
      )
        ? console.log('Post updated successfully!')
        : console.log('error');
    } catch (error) {
      console.log(error);
    }
  }
}
