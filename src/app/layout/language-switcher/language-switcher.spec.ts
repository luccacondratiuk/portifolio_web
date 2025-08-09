import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LanguageSwitcherComponent } from './language-switcher';
import { I18nService } from '../../i18n/i18n.service';

describe('LanguageSwitcherComponent', () => {
  let component: LanguageSwitcherComponent;
  let fixture: ComponentFixture<LanguageSwitcherComponent>;
  let i18nService: I18nService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageSwitcherComponent, RouterTestingModule]
    }).compileComponents();

    i18nService = TestBed.inject(I18nService);
    fixture = TestBed.createComponent(LanguageSwitcherComponent);
    component = fixture.componentInstance;
  });

  it('should update active language in I18nService when switching', () => {
    component.switchLanguage('en');
    expect(i18nService.currentLang).toBe('en');
  });
});
