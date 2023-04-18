import { Component, OnInit,Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  modalOpen = false; // Property to track modal open/close state

  openModal() {
    this.modalOpen = true; // Method to open the modal
    console.log("open")
  }

  closeModal():void {
    this.modalOpen = false; // Method to close the modal
    console.log("close")
  }
 ngOnInit():void{

 }
}
