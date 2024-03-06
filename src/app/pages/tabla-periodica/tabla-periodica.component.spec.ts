import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPeriodicaComponent } from './tabla-periodica.component';

describe('TablaPeriodicaComponent', () => {
  let component: TablaPeriodicaComponent;
  let fixture: ComponentFixture<TablaPeriodicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaPeriodicaComponent]
    });
    fixture = TestBed.createComponent(TablaPeriodicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
