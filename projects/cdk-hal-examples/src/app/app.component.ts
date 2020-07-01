import { Component, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ThemeService } from '@diaas/dxc-ngx-cdk';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "cdk-hal-examples";
  constructor(
    @Inject("ThemeService") private themeService: ThemeService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.setTheme();
  }
  setTheme() {
    this.http.get("../../assets/styles/themesProperties.json").subscribe(
      resp => {
        const remoteTheme = {
          name: "remote",
          properties: JSON.parse(JSON.stringify(resp))
        };
        this.themeService.registerTheme(remoteTheme);
      }
    );
  }
}
