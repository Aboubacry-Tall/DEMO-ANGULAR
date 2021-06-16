import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APayementsComponent } from './a-payements.component';

describe('APayementsComponent', () => {
  let component: APayementsComponent;
  let fixture: ComponentFixture<APayementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APayementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(APayementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
