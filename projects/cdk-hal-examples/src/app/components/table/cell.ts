/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {
  ContentChild,
  Directive,
  ElementRef,
  Input,
  TemplateRef,
  Inject,
  Optional,
} from '@angular/core';

import {DXC_HAL_TABLE} from './tokens';


/** Base interface for a cell definition. Captures a column's cell template definition. */
export interface CellDef {
  template: TemplateRef<any>;
}

/**
 * Cell definition for a CDK table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
@Directive({selector: '[dxcCellDef]'})
export class DxcCellDef implements CellDef {
  constructor(public template: TemplateRef<any>) {}
}

// Boilerplate for applying mixins to CdkColumnDef.
/** @docs-private */
class DxcColumnDefBase {}
const _DxcColumnDefBase: typeof DxcColumnDefBase =
    DxcColumnDefBase;

/**
 * Column definition for the CDK table.
 * Defines a set of cells available for a table column.
 */
@Directive({
  selector: '[dxcColumnDef]',
  inputs: ['sticky'],
  providers: [{provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: DxcColumnDef}],
})
export class DxcColumnDef extends _DxcColumnDefBase {
  /** Unique name for this column. */
  @Input('dxcColumnDef')
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
  @ContentChild(DxcCellDef, { static:true }) cell: DxcCellDef;

  /**
   * Transformed version of the column name that can be used as part of a CSS classname. Excludes
   * all non-alphanumeric characters and the special characters '-' and '_'. Any characters that
   * do not match are replaced by the '-' character.
   */
  cssClassFriendlyName: string;

  constructor(@Inject(DXC_HAL_TABLE) @Optional() public _table?: any) {
    super();
  }

}

/** Base class for the cells. Adds a CSS classname that identifies the column it renders in. */
export class BaseDxcCell {
  constructor(columnDef: DxcColumnDef, elementRef: ElementRef) {
    const columnClassName = `dxc-column-${columnDef.cssClassFriendlyName}`;
    elementRef.nativeElement.classList.add(columnClassName);
  }
}
/** Cell template container that adds the right classes and role. */
@Directive({
  selector: 'dxc-cell, td[dxc-cell]',
  host: {
    'class': 'dxc-cell',
    'role': 'gridcell',
  },
})
export class DxcCell extends BaseDxcCell {
  constructor(columnDef: DxcColumnDef, elementRef: ElementRef) {
    super(columnDef, elementRef);
  }
}
