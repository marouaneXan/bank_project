import { Component,Input  } from '@angular/core';

@Component({
  selector: 'app-global-modal',
  templateUrl: './global-modal.component.html',
  styleUrls: ['./global-modal.component.css']
})
export class GlobalModalComponent {
  @Input() title: string="";
  @Input() children: any;
  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
}
