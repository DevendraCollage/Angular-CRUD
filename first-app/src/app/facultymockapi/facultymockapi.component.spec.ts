import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultymockapiComponent } from './facultymockapi.component';

describe('FacultymockapiComponent', () => {
  let component: FacultymockapiComponent;
  let fixture: ComponentFixture<FacultymockapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FacultymockapiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacultymockapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
