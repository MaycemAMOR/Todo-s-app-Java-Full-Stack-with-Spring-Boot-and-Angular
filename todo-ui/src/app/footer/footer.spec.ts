import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Footer } from './footer';
import {beforeEach, describe, expect, it} from 'vitest';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toString();
  });
});
