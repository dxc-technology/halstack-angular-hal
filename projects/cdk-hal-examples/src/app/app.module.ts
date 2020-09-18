import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  ThemeService,
  DXCHeaderModule,
  ThemeModule,
  DXCFooterModule,
} from "@dxc-technology/halstack-angular";
import { ComponentsPageModule } from "./pages/components-page/components-page.module";
import { HalTablePageModule } from "./pages/hal-table-page/hal-table-page.module";
import { AutocompleteHalModule } from "./pages/hal-autocomplete/hal-autocomplete-page.module";
import { ExampleService } from './service/example.service';
@NgModule({
  declarations: [AppComponent],
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
    HalTablePageModule,
    ThemeModule
  ],
  providers: [
    { provide: "ThemeService", useClass: ThemeService },
    { provide: "ExampleService", useClass: ExampleService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
