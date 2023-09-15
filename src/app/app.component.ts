import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
secondNumber: number | undefined;
firstNumber: number | undefined;
resultValue: number | undefined;

calculate(operator: string, first: string, second: string) {
  this.firstNumber = Number(first);
  this.secondNumber = Number(second);
  switch (operator){
    case "+":
      this.resultValue = this.firstNumber + this.secondNumber;
      break;
    case "-":
      this.resultValue = this.firstNumber - this.secondNumber;
      break;
    case "*":
      this.resultValue = this.firstNumber * this.secondNumber;
      break;
    case "/":
      this.resultValue = this.firstNumber / this.secondNumber;
      break;
    case "C":
      this.resultValue = undefined;
      this.firstNumber = undefined;
      this.secondNumber = undefined;
  }
    

}
  title = 'BasicCalculator';
}
