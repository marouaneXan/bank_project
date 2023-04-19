import { Component } from '@angular/core';

@Component({
  selector: 'app-global-modal',
  templateUrl: './global-modal.component.html',
  styleUrls: ['./global-modal.component.css']
})
export class GlobalModalComponent {
  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
}
