import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  imports: [
    RouterLink
  ],
  selector: 'app-welcome',
  styleUrl: './welcome.css',
  templateUrl: './welcome.html',
  standalone: true
})
export class Welcome implements OnInit {
  message: string = 'Some welcome message';
  name: string = '';

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    console.log(this.message);
    this.name = this.route.snapshot.params['name'];
    console.log(this.route.snapshot.params['name']);
  }


}
