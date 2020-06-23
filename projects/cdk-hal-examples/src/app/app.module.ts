import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeService, DXCHeaderModule,  ThemeModule,DXCFooterModule } from '@diaas/dxc-ngx-cdk';
import { ComponentsPageModule } from './pages/components-page/components-page.module';
import { HalTablePageModule } from './pages/hal-table-page/hal-table-page.module';
import { AutocompleteHalModule } from './pages/autocomplete-hal/autocomplete-hal.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ComponentsPageModule,
    DXCHeaderModule,
    DXCFooterModule,
    AutocompleteHalModule,
    HalTablePageModule
  ],
  providers: [{ provide: 'ThemeService', useClass: ThemeService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
