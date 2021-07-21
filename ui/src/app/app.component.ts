import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FnParam} from "@angular/compiler/src/output/output_ast";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui';

  getWeatherData(data: any) {
    console.log(data)
  }
}
