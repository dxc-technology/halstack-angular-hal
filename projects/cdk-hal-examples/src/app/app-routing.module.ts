import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewPageComponent } from './pages/overview-page/overview-page.component';
import { ComponentsPageComponent } from './pages/components-page/components-page.component';
import { HrsSinglePageComponent } from './pages/hal-resource/hrs-single-page/hrs-single-page.component';
import { HrsMultiPageComponent } from './pages/hal-resource/hrs-multi-page/hrs-multi-page.component';
import { HrsNestedPageComponent } from './pages/hal-resource/hrs-nested-page/hrs-nested-page.component';
import { HrsCollectionPageComponent } from './pages/hal-resource/hrs-collection-page/hrs-collection-page.component';
import { AutocompleteHalComponent } from './pages/autocomplete-hal/autocomplete-hal.component';


const routes: Routes = [];
routes.push({ path: "", redirectTo: "/overview", pathMatch: "full" }),
 routes.push({ path: "overview", component: OverviewPageComponent }),
 routes.push({ path: "components", component: ComponentsPageComponent ,
 children: [
  {
    path: "",
    redirectTo: "hrssingle",
    pathMatch: "full"
  },
  {
    path: "hrssingle",
    component: HrsSinglePageComponent,
    outlet: "components"
  },
  {
    path: "hrsmulti",
    component: HrsMultiPageComponent,
    outlet: "components"
  },
  {
    path: "hrsnested",
    component: HrsNestedPageComponent,
    outlet: "components"
  },
  {
    path: "autocomplete",
    component: AutocompleteHalComponent,
    outlet: "components"

  },
  {
    path: "hrscollection",
    component: HrsCollectionPageComponent,
    outlet: "components"
  }
] })

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
