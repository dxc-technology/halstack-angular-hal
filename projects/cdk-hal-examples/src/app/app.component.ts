import { Component, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ThemeService } from '@dxc-technology/halstack-angular';
import { customTheme } from '../assets/styles/themesProperties';
import { ThemeService } from '@dxc-technology/halstack-angular';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "cdk-hal-examples";
  constructor(
    @Inject("ThemeService") private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.themeService.registerTheme(customTheme);
  }

}
