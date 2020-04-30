/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import { DataRowOutlet, DxcHalTable, SpinnerOutlet, HeaderOutlet } from './table';
import {
  DxcCellOutlet,
  DxcRowDef
} from './row';
import {
  DxcColumnDef, DxcCell, DxcCellDef
} from './cell';
import { DxcTextColumn} from './text-column';
import { DxcTableModule, DxcPaginatorModule, DxcSpinnerModule, DxcSpinnerComponent } from '@diaas/dxc-ngx-cdk';
import { CommonModule } from '@angular/common';
import { DxcRow, DxcHeaderRow } from './row';
import { HalResourceService } from 'projects/diaas-angular-cdk-hal/src/projects';
import { HalResourceServiceFactoryProvider } from '../../../../../diaas-angular-cdk-hal/src/lib/diaas-angular-cdk-hal.factory-provider';
import { TableSpinnerComponent } from '../table-spinner/table-spinner.component';

const EXPORTED_DECLARATIONS = [
  DxcHalTable,
  DxcRowDef,
  DxcCellDef,
  DxcCellOutlet,
  DxcColumnDef,
  TableSpinnerComponent,
  DxcCell,
  DxcHeaderRow,
  HeaderOutlet,
  DataRowOutlet,
  SpinnerOutlet,
  DxcRow,
  DxcTextColumn
];

@NgModule({
  exports: EXPORTED_DECLARATIONS,
  imports: [DxcTableModule, DxcSpinnerModule, CommonModule, DxcPaginatorModule],
  declarations: EXPORTED_DECLARATIONS,
  entryComponents: [DxcRow,DxcHeaderRow, TableSpinnerComponent],
  providers: [
    HalResourceServiceFactoryProvider.createInstance(
      HalResourceService,
      'https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects',
      {"x-api-key":"F9Pl5g8RlA4bx7NkCYfIP6lEM78Gwage4ZTURipo"})
    ]
})
export class CdkTableModule { }
