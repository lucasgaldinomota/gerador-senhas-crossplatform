import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamanhoInputComponent } from './tamanho-input.component';

describe('TamanhoInputComponent', () => {
  let component: TamanhoInputComponent;
  let fixture: ComponentFixture<TamanhoInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TamanhoInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TamanhoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
