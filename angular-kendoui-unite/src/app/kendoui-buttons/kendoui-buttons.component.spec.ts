import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendouiButtonsComponent } from './kendoui-buttons.component';

describe('KendouiButtonsComponent', () => {
  let component: KendouiButtonsComponent;
  let fixture: ComponentFixture<KendouiButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendouiButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendouiButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
