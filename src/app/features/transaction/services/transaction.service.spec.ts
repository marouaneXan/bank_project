import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TransactionService } from './transaction.service';

describe('TransactionService', () => {
  let service: TransactionService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TransactionService],
    });

    service = TestBed.inject(TransactionService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a transaction', () => {
    const testData = { key: 'value' };

    service.addTransaction(testData).subscribe(data => {
      expect(data).toEqual(testData);
    });

    const req = httpTestingController.expectOne('https://api-2445584177002.production.gw.apicast.io:443/virements');
    expect(req.request.method).toEqual('POST');
    req.flush(testData);
  });

  it('should get list of transactions', () => {
    const testData = { key: 'value' };

    service.getListTransaction().subscribe(data => {
      expect(data).toEqual(testData);
    });

    const req = httpTestingController.expectOne('https://api-2445584177002.production.gw.apicast.io:443/virements');
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
  });

  it('should delete a transaction', () => {
    const testData = { key: 'value' };

    service.deleteTransaction('123').subscribe(data => {
      expect(data).toEqual(testData);
    });

    const req = httpTestingController.expectOne('https://api-2445584177002.production.gw.apicast.io:443/virements/123');
    expect(req.request.method).toEqual('DELETE');
    req.flush(testData);
  });

  it('should check if server is up', () => {
    const testData = { key: 'value' };

    service.serverUpDown().subscribe(data => {
      expect(data).toEqual(testData);
    });

    const req = httpTestingController.expectOne('https://bff.serveo.net/actuator/health');
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
  });
});
