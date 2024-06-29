import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Events2024Component } from './events-2024.component';

describe('Events2024Component', () => {
  let component: Events2024Component;
  let fixture: ComponentFixture<Events2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Events2024Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Events2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
