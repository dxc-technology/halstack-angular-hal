import { Directive, Input, ContentChild, Inject, Optional } from '@angular/core';
import { DxcCellDef } from './dxc-cell-def.directive';
import {DXC_HAL_TABLE} from './../tokens';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

/** Base interface for a cell definition. Captures a column's cell template definition. */


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
  selector: '[dxcColumnDef]'
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
    }
  }
  _name: string;

  @Input('sortable') sortable = {isSortable:false,propertyName:""};

  @Input('value')
  get value(): string {
    return this._value;
  }
  set value(value: string) {
    if (value) {
      this._value = value;
    }
  }
  _value: string;

  /** @docs-private */
  @ContentChild(DxcCellDef, { static:true }) cell: DxcCellDef;

  constructor(@Inject(DXC_HAL_TABLE) @Optional() public _table?: any) {
    super();
  }
}
