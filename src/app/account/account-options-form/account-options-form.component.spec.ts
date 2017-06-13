import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { AccountOptionsFormComponent } from './account-options-form.component';
import { AccountOptions } from '../shared/account-options.model';

const loginIdentifierConflictChoices = [
  'choice 1',
  'choice 2'
];
const initialRawAccountOptions = {
  verifyEmail: true,
  verifyProviderEmail: false,
  allowUnverifiedLogin: true,
  preventLoginIDHarvesting: false,
  sendWelcomeEmail: true,
  sendAccountDeletedEmail: false,
  defaultLanguage: 'en',
  loginIdentifierConflict: loginIdentifierConflictChoices[0],
  loginIdentifiers: 'email',
};

/**
 * Host component that houses `AccountOptionsFormComponent`
 */
@Component({
  template: `
<gig-account-options-form [accountOptions]="accountOptions"
  [loginIdentifierConflictChoices]="loginIdentifierConflictChoices"
  [disabled]="disabled"
  [errorMessage]="errorMessage"></gig-account-options-form>
`
})
class TestHostComponent {
  accountOptions = new AccountOptions(initialRawAccountOptions);
  loginIdentifierConflictChoices = loginIdentifierConflictChoices;
  disabled = true;
  errorMessage = '';
}

describe('AccountOptionsFormComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let debugElement: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        AccountOptionsFormComponent,
        TestHostComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show error alert when errorMessage is defined', () => {
    component.errorMessage = 'some error message';
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('.alert.alert-danger'));
    expect(Boolean(debugElement)).toBeTruthy();
    element = debugElement.nativeElement;
    expect(element.textContent).toContain(component.errorMessage);
  });

  it('should not show error alert when errorMessage is not defined', () => {
    component.errorMessage = '';
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('.alert.alert-danger'));
    expect(Boolean(debugElement)).toBeFalsy();
  });

  it('should enable form when disabled is not true', () => {
    component.disabled = false;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('form fieldset'));
    element = debugElement.nativeElement;
    expect(element.attributes['disabled']).toBeFalsy();

    component.disabled = undefined;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('form fieldset'));
    element = debugElement.nativeElement;
    expect(element.attributes['disabled']).toBeFalsy();
  });

  it('should disable form when disabled is true', () => {
    component.disabled = true;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('form fieldset'));
    element = debugElement.nativeElement;
    expect(element.attributes['disabled']).toBeTruthy();
  });

  it('should disable submit button when required input is empty', () => {
    component.accountOptions = new AccountOptions({
      ...initialRawAccountOptions,
      loginIdentifiers: ''
    });
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('form button[type=submit]'));
    element = debugElement.nativeElement;
    expect(element.attributes['disabled']).toBeTruthy();
  });

  it('should enable submit button when all required inputs are not empty', () => {
    component.accountOptions = new AccountOptions(initialRawAccountOptions);
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('form button[type=submit]'));
    element = debugElement.nativeElement;
    expect(element.attributes['disabled']).toBeFalsy();
  });

  // This is definitely not all cases to test, but should be ok for test app
});
