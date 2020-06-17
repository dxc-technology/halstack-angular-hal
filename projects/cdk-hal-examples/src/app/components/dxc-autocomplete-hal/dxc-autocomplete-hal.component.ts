import { Component, OnInit, HostBinding, Input, ChangeDetectionStrategy, OnChanges, AfterViewChecked, Output,
  EventEmitter, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { SimpleChanges } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material';
import { css } from "emotion";
import { CssUtils } from '../utils';
import { HalResourceService } from '../../pages/services/diaas-angular-cdk-hal.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dxc-autocomplete-hal',
  templateUrl: './dxc-autocomplete-hal.component.html',
  styleUrls: ['./dxc-autocomplete-hal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CssUtils]
})
export class DxcAutocompleteHalComponent  implements OnInit, OnChanges, AfterViewChecked {

  @HostBinding("class") className;
  @HostBinding("class.dxc-light") isLight: boolean = true;
  @HostBinding("class.dxc-dark") isDark: boolean = false;
  @HostBinding("class.disabled") isDisabled: boolean = false;

  @Input() public prefix: string;
  @Input() public suffix: string;
  @Input() public prefixIconSrc: string;
  @Input() public suffixIconSrc: string;

  @Input() public theme: string = "light";
  @Input() public disabled: boolean = false;
  @Input() public required: boolean = false;
  @Input() public invalid: boolean = false;

  @Input() public label: String;
  @Input() public assistiveText: string;
  @Input() public name: string;
  @Input() public value: string;
  @Input() public placeholder: string;
  @Input() public halUrl: string;
  @Input() public propertyName: string;

  @Input() public margin: any;
  @Input() public size: string;

  @Output() public onClickSuffix: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onClickPrefix: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() public onBlur: EventEmitter<any> = new EventEmitter<any>();

  loading = new BehaviorSubject(false);
  renderedValue = "";
  private _valueChangeTrack: boolean;
  options = new BehaviorSubject([]);

  dxcAutocompleteMenu = this.getAutoCompleteStyle();

  @ViewChild("dxcSingleInput", { static: false }) singleInput: ElementRef;

  selectionStart: number = 0;
  selectionEnd: number = 0;
  clicked: boolean = false;

  sizes = {
    small: "42px",
    medium: "240px",
    large: "480px",
    fillParent: "100%"
  };

  defaultInputs = new BehaviorSubject<any>({
    prefix: null,
    suffix: null,
    prefixIconSrc: null,
    suffixIconSrc: null,
    theme: "light",
    disabled: false,
    required: false,
    invalid: false,
    label: null,
    assistiveText: null,
    placeholder: null,
    name: null,
    value: null,
    margin: null,
    size: "medium"
  });

  fetchStatus: BehaviorSubject<string> = new BehaviorSubject('');
  error: BehaviorSubject<any> = new BehaviorSubject(null);
  resource: BehaviorSubject<any> = new BehaviorSubject(null);
  collectionPropectService: HalResourceService;

  public formControl = new FormControl();
  public matcher = new InvalidStateMatcher();

  constructor(private utils: CssUtils,
    private ref: ChangeDetectorRef,
    httpClient: HttpClient

    ) {
      console.log(this.halUrl);
      this.collectionPropectService = new HalResourceService(
        this.halUrl,null,
        httpClient
      );


    }

  ngOnInit() {
    this.renderedValue = this.value || "";
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    this.collectionPropectService.fetchResource();
    this.fetchStatus = this.collectionPropectService.fetchStatus;
    this.error = this.collectionPropectService.errorMessage;
    this.resource = this.collectionPropectService.resource;
  }

  private bindAutocompleteOptions() {
      this.options = this.collectionPropectService.items;

  }

  ngAfterViewInit(): void {
    this.bindAutocompleteOptions();


  }

  ngAfterViewChecked(): void {

    if (this._valueChangeTrack) {
      this._valueChangeTrack = false;
      this.setCursorSelection(this.singleInput);
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
    this.isDisabled = this.disabled;

    this.renderedValue = this.value || "";
    this.label = this.label || "";
    this.matcher.setInvalid(this.invalid);

    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});

    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    this._valueChangeTrack = true;
  }

  public onChanged($event: any): void {
    this.clicked = false;
    this.selectionStart = $event.target.selectionStart;
    this.selectionEnd = $event.target.selectionEnd;
    this.onChange.emit($event.target.value);
    if (this.value === undefined || this.value === null) {
      this.renderedValue = $event.target.value;
    } else {
      $event.target.value = this.renderedValue;
    }

    console.log(this.options.value);

    // this.options = this.collectionPropectService.items.pipe(filter(option =>
    //   option.summary['prospect-full-name'].includes(this.renderedValue.toLowerCase())
    // )));
  }

  public onClickOption($event: any) {
    this.onChange.emit($event);
    if (this.value === undefined || this.value === null) {
      this.renderedValue = $event;
    } else {
      this.singleInput.nativeElement.value = this.renderedValue;
    }
  }

  /**
   * internal click event handler
   *
   * @param $event
   */
  public onClickHandle($event): void {
    this.clicked = true;
  }

  /**
   *Executed when input lost the focus
   */
  public onBlurHandle($event: any): void {
    this.onBlur.emit(this.renderedValue);
  }

  public onClickSuffixHandler($event): void {
    this.onClickSuffix.emit($event);
  }

  public onClickPrefixHandler($event): void {
    this.onClickPrefix.emit($event);
  }

  private setCursorSelection(input: ElementRef) {
    if (!this.clicked && input) {
      input.nativeElement.selectionStart = this.selectionStart;
      input.nativeElement.selectionEnd = this.selectionEnd;
    }
  }

  calculateWidth(inputs) {
    if (inputs.size === "fillParent") {
      return this.utils.calculateWidth(this.sizes, inputs);
    }
    return css`
      width: ${this.sizes[inputs.size]};
    `;
  }

  getDynamicStyle(inputs) {
    return css`
      min-height: 34px;
      max-height: 74px;
      ${this.calculateWidth(inputs)}
      ${this.utils.getMargins(inputs.margin)}
      display: inline-flex;

      .prefixElement {
        margin-right: 12px;
      }
      .suffixElement {
        margin-left: 8px;
        margin-right: 8px;
      }

      &.disabled {
        cursor: not-allowed;
      }
      .mat-form-field {
        line-height: unset;
        width: 100%;
        max-height: 74px;
        input {
          min-height: 22px;
          text-overflow: ellipsis;
        }
        img {
          width: 20px;
          height: 20px;
        }
        &.disabled {
          pointer-events: none;
        }
      }

      .mat-form-field {
        &.mat-form-field-should-float {
          .mat-form-field-infix {
            padding-bottom: 7px;
          }
          mat-label {
            font-size: 15px;
          }
        }

        .mat-form-field-label-wrapper {
          display: flex;
          .mat-form-field-label {
            flex-direction: row-reverse;
            justify-content: flex-end;
            display: flex;
          }
        }
        .mat-form-field-subscript-wrapper {
          margin-top: 6px;
        }

        .mat-form-field-infix {
          padding-top: 6px;
        }
      }

      .mat-form-field-flex {
        align-items: center;
        .mat-form-field-infix {
          border-top: unset;
        }
      }
    `;
  }

  getAutoCompleteStyle() {
    return css`
      &::-webkit-scrollbar {
        width: 3px;
      }
      &::-webkit-scrollbar-track {
        background-color: var(--lightGrey, #d9d9d9);
        border-radius: 3px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: var(--darkGrey, #666666);
        border-radius: 3px;
      }
    `;
  }
}

/** Error when invalid control is dirty, touched, or submitted. */
class InvalidStateMatcher implements ErrorStateMatcher {
  private invalid: boolean;
  isErrorState(): boolean {
    return this.invalid;
  }

  public setInvalid(invalid: boolean): void {
    this.invalid = invalid;
  }
}
