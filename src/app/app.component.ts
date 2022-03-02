import { Component } from '@angular/core';
import { ModalService } from './modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-modal';

  constructor(public modalService: ModalService){}
}
