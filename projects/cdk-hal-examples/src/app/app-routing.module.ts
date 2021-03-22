import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ComponentsPageComponent } from "./pages/components-page/components-page.component";
import { HalTablePageComponent } from "./pages/hal-table-page/hal-table-page.component";
import { AutocompleteHalComponent } from "./pages/hal-autocomplete/hal-autocomplete-page.component";

const routes: Routes = [];
routes.push({ path: "", redirectTo: "components", pathMatch: "full" }),
  routes.push({
    path: "components/autocomplete",
    component: AutocompleteHalComponent,
  }),
  routes.push({
    path: "components/haltable",
    component: HalTablePageComponent,
  }),
  routes.push({
    path: "components",
    component: ComponentsPageComponent,
  });

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
