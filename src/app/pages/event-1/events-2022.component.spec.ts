import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Events2022Component } from './events-2022.component';

describe('Events2022Component', () => {
  let component: Events2022Component;
  let fixture: ComponentFixture<Events2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Events2022Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Events2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
