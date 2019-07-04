import { Component  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'monthsColor';
  month:string;

  enterNumber(value:string){
    this.month=value;
  }
}
