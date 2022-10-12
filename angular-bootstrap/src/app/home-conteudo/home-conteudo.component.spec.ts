import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeConteudoComponent } from './home-conteudo.component';

describe('HomeConteudoComponent', () => {
  let component: HomeConteudoComponent;
  let fixture: ComponentFixture<HomeConteudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeConteudoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
