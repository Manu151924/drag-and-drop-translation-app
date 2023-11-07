import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent {
  text = 'Drag Me';
  count = 0;

  

  connectors = ['Connector 1', 'Connector 2', 'Connector 3'];

 @HostListener('cdkDragStarted', ['$event'])
 onDragStarted(_event: any) {
    console.log('Drag started for the main component');
 }

 @HostListener('cdkDragEnded', ['$event'])
 onDragEnded(_event: any) {
    console.log('Drag ended for the main component');
 }

 @HostListener('cdkDragStarted', ['$event'])
 onConnectorDragStarted(_event: any) {
    console.log('Drag started for the connector');
 }

 @HostListener('cdkDragEnded', ['$event'])
 onConnectorDragEnded(_event: any) {
    console.log('Drag ended for the connector');
 }

}
