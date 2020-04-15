import { Component, OnInit, Input, Directive, TemplateRef, ViewEncapsulation, ChangeDetectionStrategy, ViewContainerRef, ElementRef, OnDestroy, ViewChild, ContentChild, ContentChildren } from '@angular/core';

export interface DxcCellOutletRowContext<T> {
  /** Data for the row that this cell is located within. */
  $implicit?: T;

  /** Index of the data object in the provided data array. */
  index?: number;

  /** Length of the number of total rows. */
  count?: number;

  /** True if this cell is contained in the first row. */
  first?: boolean;

  /** True if this cell is contained in the last row. */
  last?: boolean;

  /** True if this cell is contained in a row with an even-numbered index. */
  even?: boolean;

  /** True if this cell is contained in a row with an odd-numbered index. */
  odd?: boolean;
}

/**
 * Cell definition for a CDK table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
@Directive({selector: '[dxcCellDef]'})
export class DxcCellDef {
  constructor(/** @docs-private */ public template: TemplateRef<any>) {}
}

/** @docs-private */
// @ContentChild(DxcCellDef) cell: DxcCellDef;

export const DXC_ROW_TEMPLATE = `<ng-container dxcCellOutlet></ng-container>`;

/** Data row template container that contains the cell outlet. Adds the right class and role. */
@Component({
  selector: 'dxc-row, tr[dxc-row]',
  template: DXC_ROW_TEMPLATE,
  host: {
    'role': 'row',
  },
  // See note on CdkTable for explanation on why this uses the default change detection strategy.
  // tslint:disable-next-line:validate-decorators
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
})
export class DxcRow {
}


export const DXC_CELL_TEMPLATE = `<span>celda</span>`;

/** Interface used to provide an outlet for rows to be inserted into. */
export interface RowOutlet {
  viewContainer: ViewContainerRef;
}

/**
 * Provides a handle for the table to grab the view container's ng-container to insert data rows.
 * @docs-private
 */
@Directive({selector: '[rowOutlet]'})
export class DataRowOutlet implements RowOutlet{
  constructor(public viewContainer: ViewContainerRef, public elementRef: ElementRef) {
    debugger;    
  }

  
}

/**
 * Outlet for rendering cells inside of a row or header row.
 * @docs-private
 */
@Directive({selector: '[cdkCellOutlet]'})
export class DxcCellOutlet implements OnDestroy {
  /** The ordered list of cells to render within this outlet's view container */
  cells: DxcCellDef[];

  /** The data context to be provided to each cell */
  context: any;

  /**
   * Static property containing the latest constructed instance of this class.
   * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
   * createEmbeddedView. After one of these components are created, this property will provide
   * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
   * construct the cells with the provided context.
   */
  static mostRecentCellOutlet: DxcCellOutlet|null = null;

  constructor(public _viewContainer: ViewContainerRef) {
    DxcCellOutlet.mostRecentCellOutlet = this;
  }

  ngOnDestroy() {
    // If this was the last outlet being rendered in the view, remove the reference
    // from the static property after it has been destroyed to avoid leaking memory.
    if (DxcCellOutlet.mostRecentCellOutlet === this) {
      DxcCellOutlet.mostRecentCellOutlet = null;
    }
  }
}

/**
 * Class used to conveniently type the embedded view ref for rows with a context.
 * @docs-private
 */
// abstract class RowViewRef<T> extends EmbeddedViewRef<DxcCellRowContext<T>> {}

export interface RenderRow<T> {
  data: T;
  dataIndex: number;
  // rowDef: DxcRowDef<T>;
}

/** Base class for the cells. Adds a CSS classname that identifies the column it renders in. */
export class BaseCdkCell {
  constructor(columnDef: CdkColumnDef, elementRef: ElementRef) {
    const columnClassName = `cdk-column-${columnDef.cssClassFriendlyName}`;
    elementRef.nativeElement.classList.add(columnClassName);
  }
}


/** Cell template container that adds the right classes and role. */
@Directive({
  selector: 'cdk-cell, td[cdk-cell]',
  host: {
    'class': 'cdk-cell',
    'role': 'gridcell',
  },
})
export class CdkCell extends BaseCdkCell {
  constructor(columnDef: CdkColumnDef, elementRef: ElementRef) {
    super(columnDef, elementRef);
  }
}

/**
 * Column definition for the CDK table.
 * Defines a set of cells available for a table column.
 */
@Directive({
  selector: '[cdkColumnDef]',
  inputs: ['sticky'],
  // providers: [{provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: CdkColumnDef}],
})
export class CdkColumnDef {
  /** Unique name for this column. */
  @Input('cdkColumnDef')
  get name(): string {
    return this._name;
  }
  set name(name: string) {
    // If the directive is set without a name (updated programatically), then this setter will
    // trigger with an empty string and should not overwrite the programatically set value.
    if (name) {
      this._name = name;
      this.cssClassFriendlyName = name.replace(/[^a-z0-9_-]/ig, '-');
    }
  }
  _name: string;

  /** @docs-private */
  @ContentChild(DxcCellDef,null) cell: DxcCellDef;

  /** @docs-private */
  // @ContentChild(CdkHeaderCellDef) headerCell: CdkHeaderCellDef;

  /** @docs-private */
  // @ContentChild(CdkFooterCellDef) footerCell: CdkFooterCellDef;

  /**
   * Transformed version of the column name that can be used as part of a CSS classname. Excludes
   * all non-alphanumeric characters and the special characters '-' and '_'. Any characters that
   * do not match are replaced by the '-' character.
   */
  cssClassFriendlyName: string;

  constructor(/*@Inject(CDK_TABLE) @Optional() public _table?: any*/) {
    
  }

}

/**
 * Data row definition for the CDK table.
 * Captures the header row's template and other row properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */
@Directive({
  selector: '[cdkRowDef]',
  inputs: ['columns: cdkRowDefColumns', 'when: cdkRowDefWhen'],
})
export class CdkRowDef<T> {

  columns: Iterable<string>;

  /**
   * Function that should return true if this row template should be used for the provided index
   * and row data. If left undefined, this row will be considered the default row template to use
   * when no other when functions return true for the data.
   * For every row, there must be at least one when function that passes or an undefined to default.
   */
  when: (index: number, rowData: T) => boolean;

  // TODO(andrewseguin): Add an input for providing a switch function to determine
  //   if this template should be used.
  constructor(
    public template: TemplateRef<any>){
  }

  /** Gets this row def's relevant cell template from the provided column def. */
  extractCellTemplate(column: CdkColumnDef): TemplateRef<any> {
    
      return column.cell.template;
    
  }
}

@Component({
  selector: 'dxc-hal-table',
  templateUrl: './dxc-hal-table.component.html',
  styleUrls: ['./dxc-hal-table.component.scss']
})
export class DxcHalTableComponent implements OnInit {

  @Input() halService : any;
  @Input() columns : Array<any>;
  @Input() itemsPerPage : number;

  public fetchStatus: any;
  public resource: any;
  public error: any;
  public items: any;
  
  totalItems : any;
  page : number = 1;

  @ViewChild(DataRowOutlet, {static: true}) _rowOutlet: DataRowOutlet;

  private _columnDefsByName = new Map<string, CdkColumnDef>();

  ngOnInit() {
    this.halService.handleGet({
      url: this.halService.addPageParams(this.page, this.itemsPerPage), 
      status: 'navigating'
    });
    this.fetchStatus = this.halService.fetchStatus;
    this.resource = this.halService.resource;
    this.error = this.halService.errorMessage;
    this.items = this.halService.items;
    this.totalItems = this.halService.totalItems;
    // this.halService.totalItems.subscribe( (value: number) => this.totalItems = value );

  }

  ngAfterContentChecked() {
    this.renderRows();
  }
  navigate(page: number, operation:string){
    switch (operation) {
      case 'next': 
      case 'first':
      case 'prev':
      case 'last':
        this.page=page;
        return this.halService.handleGet({ 
          url: this.halService.addPageParams(this.page, this.itemsPerPage),
          status: 'navigating'
        });                                                                     
      default:
        this.halService.buildErrorResponse({
          message: `Error. Operation  ${operation} is not known.`
        });
        break;
    }
  }

  runColumnFunction(column: any, item: any) {
    column.onClickItemFunction(column, item);
  }

  getItemPropertyValue(item, propertyKey){
    return item !== undefined && item !== null && item.summary!== null && item.summary && item.summary[propertyKey] !== null && item.summary[propertyKey] !== undefined ? 
      item.summary[propertyKey]: '';
  }

  renderRows() {
    
    const changes = ['celda1', 'celda2', 'celda3'];
    if (!changes) {
      return;
    }

    const viewContainer = this._rowOutlet.viewContainer;

    changes.forEach(item => {
      this._insertRow(item, 1);
    });
    // changes.forEachOperation(
    //     (record: IterableChangeRecord<RenderRow<T>>, prevIndex: number|null,
    //      currentIndex: number|null) => {
    //       if (record.previousIndex == null) {
    //         this._insertRow(record.item, currentIndex!);
    //       } else if (currentIndex == null) {
    //         viewContainer.remove(prevIndex!);
    //       } else {
    //         const view = <RowViewRef<T>>viewContainer.get(prevIndex!);
    //         viewContainer.move(view!, currentIndex);
    //       }
    //     });

    // Update rows that did not get added/removed/moved but may have had their identity changed,
    // e.g. if trackBy matched data on some property but the actual data reference changed.
    changes.forEach(item => {
      // ((record: IterableChangeRecord<RenderRow<T>>) => {
      // const rowView = <RowViewRef<T>>viewContainer.get(record.currentIndex!);
      // rowView.context.$implicit = record.item.data;
    });

    // this.updateStickyColumnStyles();
  }

  /**
   * Create the embedded view for the data row template and place it in the correct index location
   * within the data row view container.
   */
  private _insertRow(renderRow: any, renderIndex: number) {
    // const rowDef = renderRow.rowDef;
    const context: DxcCellOutletRowContext<any> = {$implicit: renderRow};
    this._renderRow(this._rowOutlet, null, renderIndex, context);
  }

  /**
   * Creates a new row template in the outlet and fills it with the set of cell templates.
   * Optionally takes a context to provide to the row and cells, as well as an optional index
   * of where to place the new row template in the outlet.
   */
  private _renderRow(
      outlet: DataRowOutlet, rowDef: any, index: number, context: DxcCellOutletRowContext<any> = {}) {
    // TODO(andrewseguin): enforce that one outlet was instantiated from createEmbeddedView
    outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);

    for (let cellTemplate of this._getCellTemplates(rowDef)) {
      if (DxcCellOutlet.mostRecentCellOutlet) {
        DxcCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
      }
    }

    // this._changeDetectorRef.markForCheck();
  }

  /** Gets the column definitions for the provided row def. */
  private _getCellTemplates(rowDef: CdkRowDef<any>): TemplateRef<any>[] {

      return Array.from(rowDef.columns, columnId => {
      const column = this._columnDefsByName.get(columnId);

      return rowDef.extractCellTemplate(column);
    });
    
  }
}
// outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);