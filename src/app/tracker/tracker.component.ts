import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  todos: any = [
    {
      name: 'Task1'
    },
    {
      name: 'Task2'
    },
    {
      name: 'Task3'
    },
    {
      name: 'Task4'
    }
  ];

  inProgress: any = [
    {
      name: 'Task5'
    }
  ];

  dones: any = [
    {
      name: 'Task6'
    },
  ];

  constructor() { }

  ngOnInit() {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
