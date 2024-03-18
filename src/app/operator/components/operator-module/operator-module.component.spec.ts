import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorModuleComponent } from './operator-module.component';

describe('OperatorModuleComponent', () => {
  let component: OperatorModuleComponent;
  let fixture: ComponentFixture<OperatorModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
