import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionModuleComponent } from './solution-module.component';

describe('SolutionModuleComponent', () => {
  let component: SolutionModuleComponent;
  let fixture: ComponentFixture<SolutionModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionModuleComponent]
    });
    fixture = TestBed.createComponent(SolutionModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
