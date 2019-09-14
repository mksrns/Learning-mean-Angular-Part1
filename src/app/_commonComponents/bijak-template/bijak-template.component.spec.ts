import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BijakTemplateComponent } from './bijak-template.component';

describe('BijakTemplateComponent', () => {
  let component: BijakTemplateComponent;
  let fixture: ComponentFixture<BijakTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BijakTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BijakTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
