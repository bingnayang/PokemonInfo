import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonErrorComponent } from './pokemon-error.component';

describe('PokemonErrorComponent', () => {
  let component: PokemonErrorComponent;
  let fixture: ComponentFixture<PokemonErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
