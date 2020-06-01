import {InjectionToken} from '@angular/core';

/**
 * Used to provide a table to some of the sub-components without causing a circular dependency.
 * @docs-private
 */
export const DXC_HAL_TABLE = new InjectionToken<any>('DXC_HAL_TABLE');

