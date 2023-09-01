import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpPage } from './sp.page';

describe('SpPage', () => {
  let component: SpPage;
  let fixture: ComponentFixture<SpPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
