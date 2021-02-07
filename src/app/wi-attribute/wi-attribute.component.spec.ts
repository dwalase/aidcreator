import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiAttributeComponent } from './wi-attribute.component';

describe('WiAttributeComponent', () => {
  let component: WiAttributeComponent;
  let fixture: ComponentFixture<WiAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WiAttributeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WiAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
