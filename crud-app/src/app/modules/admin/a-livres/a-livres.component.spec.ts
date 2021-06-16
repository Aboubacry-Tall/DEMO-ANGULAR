import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALivresComponent } from './a-livres.component';

describe('ALivresComponent', () => {
  let component: ALivresComponent;
  let fixture: ComponentFixture<ALivresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ALivresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ALivresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
