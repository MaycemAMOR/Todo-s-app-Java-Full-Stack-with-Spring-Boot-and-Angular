import {Component, OnInit, signal} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {WelcomeData} from '../services/data/welcome-data';

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
  // 1. Un seul Signal pour le message (null par défaut)
  public welcomeMessageFromService = signal<string | null>(null);
  name: string = '';

  constructor(
    private route: ActivatedRoute,
    private welcomeDate: WelcomeData
  ) {
  }

  ngOnInit(): void {
    //console.log(this.message);
    this.name = this.route.snapshot.params['name'];
    //console.log(this.route.snapshot.params['name']);
  }


  protected getPersonalisedWelcomeMessage(): void {
    //console.log(this.welcomeDate.executeHelloWorldBeanService());
    this.welcomeDate.executeHelloWorldBeanService().subscribe({
      next: (response) => this.handelSuccessfulResponse(response),
      error: (error) => this.hudleErrorResponse(error)
    });
    //console.log("last line of getPersonalisedWelcomeMessage");
  }

  protected getPersonalisedWelcomeMessageWithParameter(): void {
    //console.log(this.welcomeDate.executeHelloWorldBeanService());
    this.welcomeDate.executeHelloWorldPathVariableService(this.name).subscribe({
      next: (response) => this.handelSuccessfulResponse(response),
      error: (error) => this.hudleErrorResponse(error)
    });
    //console.log("last line of getPersonalisedWelcomeMessage");
  }


  protected handelSuccessfulResponse(response: any): void {
    // 2. La mise à jour du Signal déclenche le rafraîchissement du HTML
    this.welcomeMessageFromService.set(response.message);
    // console.log(response.message);
  }


  private hudleErrorResponse(error: any) {
    //console.log(error);
    //console.log(error.error);
    //console.log(error.error.message);
    this.welcomeMessageFromService.set(error.error.message);

  }
}
