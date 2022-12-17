import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopMainComponentComponent } from './shop-main-component.component';

describe('ShopMainComponentComponent', () => {
  let component: ShopMainComponentComponent;
  let fixture: ComponentFixture<ShopMainComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopMainComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopMainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
