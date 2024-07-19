import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllContactComponent } from './view-all-contact.component';

describe('ViewAllContactComponent', () => {
  let component: ViewAllContactComponent;
  let fixture: ComponentFixture<ViewAllContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
