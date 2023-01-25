import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0;

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength (event : Event) {

    const target = event.target as HTMLInputElement;
    const parsedValue = parseInt(target.value);
    if(!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
    console.log("Password Length ",this.length);
  }

  onButtonClick() {

    let validChar = '';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()';

    let pwd='';

    if (this.includeLetters) {
      validChar += letters;
    }

    if(this.includeNumbers) {
      validChar += numbers;
    }

    if(this.includeSymbols) {
      validChar += symbols;
    }

    for(let i=1;i<=this.length;i++){
      const index = Math.floor(Math.random() * validChar.length);
      pwd += validChar[index];
    }
    this.password = pwd;

  }
}
