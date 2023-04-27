// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { ListTransactionsComponent } from './list-transactions.component';
// import { TransactionService } from '../../services/transaction.service';
// import { LoadingService } from 'src/app/core/services/loading.service';

// describe('ListTransactionsComponent', () => {
//   let component: ListTransactionsComponent;
//   let fixture: ComponentFixture<ListTransactionsComponent>;
//   let transactionService: TransactionService;
//   let loadingService: LoadingService;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       declarations: [ListTransactionsComponent],
//       providers: [TransactionService, LoadingService],
//     }).compileComponents();

//     fixture = TestBed.createComponent(ListTransactionsComponent);
//     component = fixture.componentInstance;
//     transactionService = TestBed.inject(TransactionService);
//     loadingService = TestBed.inject(LoadingService);
//     fixture.detectChanges();
//   });

//   it('should create the component', () => {
//     expect(component).toBeTruthy();
//   });

//   // it('should call getTransactions on ngOnInit', () => {
//   //   spyOn(component, 'getTransactions');
//   //   component.ngOnInit();
//   //   expect(component.getTransactions).toHaveBeenCalled();
//   // });


// });
