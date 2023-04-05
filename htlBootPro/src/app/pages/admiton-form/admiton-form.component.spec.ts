import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmitonFormComponent } from './admiton-form.component';

describe('AdmitonFormComponent', () => {
  let component: AdmitonFormComponent;
  let fixture: ComponentFixture<AdmitonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmitonFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmitonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
