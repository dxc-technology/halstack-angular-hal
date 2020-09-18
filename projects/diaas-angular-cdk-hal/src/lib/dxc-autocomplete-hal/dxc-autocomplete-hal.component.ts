import {
  Component,
  OnInit,
  HostBinding,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  Output,
  EventEmitter
} from "@angular/core";
import { BehaviorSubject, of } from "rxjs";

import { SimpleChanges } from "@angular/core";

import { HalResourceService } from "../diaas-angular-cdk-hal.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "dxc-autocomplete-hal",
  templateUrl: "./dxc-autocomplete-hal.component.html",
  styleUrls: ["./dxc-autocomplete-hal.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DxcAutocompleteHalComponent implements OnInit, OnChanges {
  @HostBinding("class") className;
  @HostBinding("class.disabled") isDisabled: boolean = false;

  @Input() public prefix: string;
  @Input() public suffix: string;
  @Input() public prefixIconSrc: string;
  @Input() public suffixIconSrc: string;

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
  @Input() public headers: any;
  @Input() public asyncHeadersHandler: Function;

  @Input() public margin: any;
  @Input() public size: string;
  @Input() public rel: string;

  @Output() public onClickSuffix: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onClickPrefix: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() public onBlur: EventEmitter<any> = new EventEmitter<any>();

  options = new BehaviorSubject([]);
  suggestions = new BehaviorSubject([]);

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

  fetchStatus: BehaviorSubject<string> = new BehaviorSubject("");
  error: BehaviorSubject<any> = new BehaviorSubject(null);
  resource: BehaviorSubject<any> = new BehaviorSubject(null);
  collectionPropectService: HalResourceService;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.updateSuggestions = this.updateSuggestions.bind(this);
    this.collectionPropectService = new HalResourceService(
      this.halUrl,
      new HttpHeaders(this.headers),
      this.httpClient
    );
    this.collectionPropectService.fetchResource();
  }

  private bindAutocompleteOptions() {
    this.options = this.collectionPropectService.items;
    this.options.subscribe(items => {
      this.suggestions.next(
        items.map(item => {
          return item.summary[this.propertyName];
        })
      );
    });
  }

  updateSuggestions() {
    if (this.options) {
      this.options.subscribe(items => {
        this.suggestions.next(
          items.map(item => {
            return item.summary[this.propertyName];
          })
        );
      });
      return this.suggestions;
    }
  }

  ngAfterViewInit(): void {
    this.bindAutocompleteOptions();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.isDisabled = this.disabled;

    this.label = this.label || "";

    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});

    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
  }

  public onChanged($event: any): void {
    this.onChange.emit($event);

    if ($event) {
      const payload = {};
      payload[this.propertyName] = $event;
      if (
        this.asyncHeadersHandler &&
        typeof this.asyncHeadersHandler === "function"
      ) {
        this.asyncHeadersHandler().subscribe(additionalHeaders => {
          let headersObject = new HttpHeaders(Object.assign(this.headers, additionalHeaders));
          this.collectionPropectService.executeHandler(this.rel, payload, headersObject);
        });
      } else {
        this.collectionPropectService.executeHandler(this.rel, payload, new HttpHeaders(this.headers));
      }
    }
  }

  /**
   *Executed when input lost the focus
   */
  public onBlurHandle($event: any): void {
    this.onBlur.emit($event);
  }

  public onClickSuffixHandler($event): void {
    this.onClickSuffix.emit($event);
  }

  public onClickPrefixHandler($event): void {
    this.onClickPrefix.emit($event);
  }
}
