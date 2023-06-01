import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageContainerComponent } from './usage-container.component';

describe('UsageContainerComponent', () => {
  let component: UsageContainerComponent;
  let fixture: ComponentFixture<UsageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsageContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
