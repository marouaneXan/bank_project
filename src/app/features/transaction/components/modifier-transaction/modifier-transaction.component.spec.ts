import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTransactionComponent } from './modifier-transaction.component';

describe('ModifierTransactionComponent', () => {
  let component: ModifierTransactionComponent;
  let fixture: ComponentFixture<ModifierTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierTransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
