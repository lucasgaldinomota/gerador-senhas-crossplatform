import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeSenhaComponent } from './exibe-senha.component';

describe('ExibeSenhaComponent', () => {
  let component: ExibeSenhaComponent;
  let fixture: ComponentFixture<ExibeSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExibeSenhaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibeSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
