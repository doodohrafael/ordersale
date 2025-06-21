import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelButtonsRegisterComponent } from './panel-buttons-register.component';

describe('PanelButtonsRegisterComponent', () => {
  let component: PanelButtonsRegisterComponent;
  let fixture: ComponentFixture<PanelButtonsRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelButtonsRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelButtonsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
