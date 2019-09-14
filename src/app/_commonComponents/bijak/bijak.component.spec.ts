import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BijakComponent } from './bijak.component';

describe('BijakComponent', () => {
  let component: BijakComponent;
  let fixture: ComponentFixture<BijakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BijakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BijakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
