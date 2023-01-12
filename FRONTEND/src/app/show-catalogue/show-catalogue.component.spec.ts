import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCatalogueComponent } from './show-catalogue.component';

describe('ShowCatalogueComponent', () => {
  let component: ShowCatalogueComponent;
  let fixture: ComponentFixture<ShowCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCatalogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
