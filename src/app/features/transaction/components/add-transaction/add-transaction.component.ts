import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { TransactionService } from '../../services/transaction.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent {
  step: number = 0
  isLoading: boolean = false
  success: boolean = false
  constructor(private toastr: ToastrService, private transactionService: TransactionService, private loadingService: LoadingService, private tokenService: TokenService) { }
  transactionForm = new FormGroup({
    sourceAccount: new FormControl<string | null>(null, [Validators.required]),
    destinationAccount: new FormControl<string | null>(null, [Validators.required]),
    agentId: new FormControl(this.tokenService.getAgentIdFromPayload(), [Validators.required]),
    amount: new FormControl<number | null>(null, [Validators.required]),
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
        (res: any) => {
          if (res.status !== 500) {
            this.isLoading = false
            this.success = true
            this.loadingService.hide()
            this.transactionForm.reset()
            this.step++
          } else {
            this.toastr.error('Error on adding new transaction :(');
            this.isLoading = false
            this.success = false
            this.loadingService.hide()
          }
        },
        err => {
          this.toastr.error(err);
          this.isLoading = false
          this.success = false
          this.loadingService.hide()
        }
      )
    }
  }
}
