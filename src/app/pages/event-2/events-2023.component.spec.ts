import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Events2023Component } from './events-2023.component';

describe('Events2023Component', () => {
  let component: Events2023Component;
  let fixture: ComponentFixture<Events2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Events2023Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Events2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
