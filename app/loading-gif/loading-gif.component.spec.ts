import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingGifComponent } from './loading-gif.component';

describe('LoadingGifComponent', () => {
  let component: LoadingGifComponent;
  let fixture: ComponentFixture<LoadingGifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingGifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
