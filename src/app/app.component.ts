import { Component } from '@angular/core'; //c#da using gibi burada da import etmemiz gerekiyor.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "northwind";
  user: string = "Büşra Akbulut"; // type belirtmek zorunlu değil belirtmeyedebilirsin.
  
}
