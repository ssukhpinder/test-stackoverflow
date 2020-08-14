import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostCategoriesDetailsComponent } from './cost-categories-details.component';

describe('CostCategoriesDetailsComponent', () => {
  let component: CostCategoriesDetailsComponent;
  let fixture: ComponentFixture<CostCategoriesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostCategoriesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostCategoriesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
