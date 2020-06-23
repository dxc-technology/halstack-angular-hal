import { Component, Inject } from "@angular/core";
import { ThemeService } from "@diaas/dxc-ngx-cdk";
import { HttpClient } from "@angular/common/http";

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
    this.themeService.registerTheme({
      properties: {
        "--black": "#000000",
        "--lightBlack": "#212121",
        "--white": "#FFFFFF",
        "--darkWhite": "#EEEEEE",
        "--yellow": "#FFED00",
        "--darkGrey": "#666666",
        "--lightGrey": "#D9D9D9",
        "--darkRed": "#D0011B",
        "--lightRed": "#FF6161",
        "--lightBlue": "#CEE0F5",
        "--lightYellow": "#FCF2BD",
        "--lightPink": "#F9CFCF",
        "--lightGreen": "#DBF1C4"
      }
    });
  }

}
