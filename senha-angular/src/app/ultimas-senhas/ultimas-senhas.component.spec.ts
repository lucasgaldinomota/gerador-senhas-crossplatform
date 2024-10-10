import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimasSenhasComponent } from './ultimas-senhas.component';

describe('UltimasSenhasComponent', () => {
  let component: UltimasSenhasComponent;
  let fixture: ComponentFixture<UltimasSenhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UltimasSenhasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UltimasSenhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
