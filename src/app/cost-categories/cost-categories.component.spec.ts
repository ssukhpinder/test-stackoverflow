import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostCategoriesComponent } from './cost-categories.component';

describe('CostCategoriesComponent', () => {
  let component: CostCategoriesComponent;
  let fixture: ComponentFixture<CostCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
