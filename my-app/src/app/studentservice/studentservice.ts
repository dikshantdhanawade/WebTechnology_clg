import { Component } from '@angular/core';

@Component({
  selector: 'app-studentservice',
  imports: [],
  templateUrl: './studentservice.html',
  styleUrl: './studentservice.css',
})
export class Studentservice {
  students=[
    {name:'Dikshant',age:20,course:'CE'}
  ];

  getstudents(){
    return this.students
  }
  
}
//Activity:write 2 example services with angular and learn  more about dependencie injection
