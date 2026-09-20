import {Component} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-error',
  styleUrl: './error.css',
  templateUrl: './error.html',
  standalone: true
})
export class Error {
  errorMsg: string = 'An error occurred! Contact Support at *******-****** '
}
