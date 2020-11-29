import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule  } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CocktailSearchComponent } from './cocktail-search.component';
import { HttpClientModule } from '@angular/common/http';
import { CocktailSearchService } from './cocktail-search.service'
import { CarouselModule} from 'primeng/carousel';

describe('CocktailSearchComponent', () => {
  let component: CocktailSearchComponent;
  let fixture: ComponentFixture<CocktailSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailSearchComponent ],
      imports:[HttpClientModule,RouterTestingModule,HttpClientTestingModule,CarouselModule],
      providers: [CocktailSearchService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialise variables', () => {
    expect(component.displayDetails).toBeFalse();
    expect(component.showSpinner).toBeFalse();
  });

  it('search cocktail', () => {
    component.searchCocktail('margarita')
    expect(component.showSpinner).toBeFalse();
    expect(component.home).toBeFalse();
  });

  it('filter cocktail', () => {
    component.filterCocktail('c','cocktail')
    expect(component.showSpinner).toBeFalse();
    expect(component.home).toBeFalse();
  });

  it('get cocktail', () => {
    component.getCocktailDetail('11007')
    expect(component.displayDetails).toBeTrue();
  });
});