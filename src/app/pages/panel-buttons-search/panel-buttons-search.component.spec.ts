import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelButtonsSearchComponent } from './panel-buttons-search.component';

describe('PanelButtonsSearchComponent', () => {
  let component: PanelButtonsSearchComponent;
  let fixture: ComponentFixture<PanelButtonsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelButtonsSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelButtonsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
