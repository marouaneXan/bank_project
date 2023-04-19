import { Component,Input  } from '@angular/core';

@Component({
  selector: 'app-global-modal',
  templateUrl: './global-modal.component.html',
  styleUrls: ['./global-modal.component.css']
})
export class GlobalModalComponent {
  @Input() sourceAccount: string="";
  @Input() destinationAccount: string="";  
  @Input() amount: string="";
  @Input() agentId: string="";
  @Input() title: string="";
  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
}
