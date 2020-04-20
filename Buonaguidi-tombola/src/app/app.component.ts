import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Buonaguidi-tombola';
  numeriUsciti: Array<number>=[];
  ultimoNumero: Number;
  generaNumero() {
    var n = null;
    while(n==null) {
      let tmp = Math.floor(Math.random()*99+1);
      let change = true;
      for (var i in this.numeriUsciti) {
        if (tmp == Number(i)) {
          change = false;
        }
      }
      if (change) {
        n = tmp;
      }
    }
    this.ultimoNumero=n;
    this.numeriUsciti.push(n);
    console.log(n);
    document.getElementById("numero").innerHTML=n+"";
    if (this.numeriUsciti.length == 100) {
      console.log("Sono esauriti i numeri");
      document.getElementById("bottone").setAttribute("disabled", "disabled");
      alert("Numeri Eusariti")
      return false;
    }
    return false;
  }
}
