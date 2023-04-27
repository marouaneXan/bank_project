import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTransactionComponent } from './add-transaction.component';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('AddTransactionComponent', () => {
  let component: AddTransactionComponent;
  let fixture: ComponentFixture<AddTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTransactionComponent],
      imports: [ToastrModule.forRoot(), ReactiveFormsModule, HttpClientModule],
      providers: [ToastrService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize step to 0', () => {
    expect(component.step).toBe(0);
  });

  it('should initialize isLoading to false', () => {
    expect(component.isLoading).toBe(false);
  });

  it('should initialize success to false', () => {
    expect(component.success).toBe(false);
  });

  it('should initialize transactionForm', () => {
    expect(component.transactionForm).toBeTruthy();
  });

  it('should not make a transaction if the form is not valid', () => {
    component.transactionForm.setValue({
      sourceAccount: '',
      destinationAccount: '654321',
      agentId: 'agent001',
      amount: 1000
    });
  });
});
