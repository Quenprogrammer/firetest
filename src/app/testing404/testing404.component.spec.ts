import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing404Component } from './testing404.component';

describe('Testing404Component', () => {
  let component: Testing404Component;
  let fixture: ComponentFixture<Testing404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testing404Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Testing404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
