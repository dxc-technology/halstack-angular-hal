/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import { DataRowOutlet, DxcHalTable } from './table';
import {
  DxcCellOutlet,
  DxcRowDef
} from './row';
import {
  DxcColumnDef, DxcCell, DxcCellDef
} from './cell';
import { DxcTextColumn} from './text-column';
import { DxcTableModule } from '@diaas/dxc-ngx-cdk';
import { CommonModule } from '@angular/common';
import { DxcRow } from './row';

const EXPORTED_DECLARATIONS = [
  DxcHalTable,
  DxcRowDef,
  DxcCellDef,
  DxcCellOutlet,
  DxcColumnDef,
  DxcCell,
  DataRowOutlet,
  DxcRow,
  DxcTextColumn
];

@NgModule({
  exports: EXPORTED_DECLARATIONS,
  imports: [DxcTableModule, CommonModule],
  declarations: EXPORTED_DECLARATIONS,
  entryComponents: [DxcRow]

})
export class CdkTableModule { }
