import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrsSinglePageModule } from '../hal-resource/hrs-single-page/hrs-single-page.module';
import { ComponentsPageComponent } from './components-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HrsMultiPageModule } from '../hal-resource/hrs-multi-page/hrs-multi-page.module';
import { HrsNestedPageModule } from '../hal-resource/hrs-nested-page/hrs-nested-page.module';
import { HrsCollectionPageModule } from '../hal-resource/hrs-collection-page/hrs-collection-page.module';

@NgModule({
  declarations: [ComponentsPageComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    HrsSinglePageModule,
    HrsMultiPageModule,
    HrsNestedPageModule,
    HrsCollectionPageModule
  ],
  exports: [ComponentsPageComponent]
})
export class ComponentsPageModule { }
