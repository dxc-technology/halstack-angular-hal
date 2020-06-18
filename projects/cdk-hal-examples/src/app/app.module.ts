import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeService, DXCHeaderModule,  ThemeModule, DXCFooterModule, DXCInputTextModule } from '@diaas/dxc-ngx-cdk';
import { OverviewPageModule } from './pages/overview-page/overview-page.module';
import { ComponentsPageModule } from './pages/components-page/components-page.module';
import { AutocompleteHalComponent } from './pages/autocomplete-hal/autocomplete-hal.component';
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
    AutocompleteHalModule,
    OverviewPageModule,
    DXCHeaderModule,
    DXCFooterModule,
    DXCInputTextModule
  ],
  providers: [{ provide: 'ThemeService', useClass: ThemeService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
