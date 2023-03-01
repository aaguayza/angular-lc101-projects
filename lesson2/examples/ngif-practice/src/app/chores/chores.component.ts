import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [];
   finishedChores = ["one done", "two done", 'three done'];
   scold = "Work Harder"

   targetImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiLYcDNq7oEvNHtb_AzTfvcJIjWGjkrjNxWQ&usqp=CAU';

   constructor() { }

   ngOnInit() {
   }

}
