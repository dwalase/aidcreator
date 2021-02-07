import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiGeneratorComponent } from './wi-generator.component';

describe('WiGeneratorComponent', () => {
  let component: WiGeneratorComponent;
  let fixture: ComponentFixture<WiGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WiGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WiGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
