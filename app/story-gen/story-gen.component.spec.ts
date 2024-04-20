import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryGenComponent } from './story-gen.component';

describe('StoryGenComponent', () => {
  let component: StoryGenComponent;
  let fixture: ComponentFixture<StoryGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryGenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
