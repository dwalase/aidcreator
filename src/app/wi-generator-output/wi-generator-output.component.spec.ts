import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiGeneratorOutputComponent } from './wi-generator-output.component';

describe('WiGeneratorOutputComponent', () => {
  let component: WiGeneratorOutputComponent;
  let fixture: ComponentFixture<WiGeneratorOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WiGeneratorOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WiGeneratorOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
