import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BijaksComponent } from './bijaks.component';

describe('BijaksComponent', () => {
  let component: BijaksComponent;
  let fixture: ComponentFixture<BijaksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BijaksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BijaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
