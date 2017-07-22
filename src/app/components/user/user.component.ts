import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address
  hobbies:string[];
  hello:any;

  constructor(private dataService:DataService) {
    console.log('constructor ran..');
  }

  ngOnInit() {
    console.log('ngOnInit ran..');

    this.name = 'Navon Francis';
    this.email = 'navonfrancis@gmail.com'
    this.age = 21;
    this.address = {
      street: '50 main street',
      city: 'Orlando',
      state: 'FL'
    }
    this.hobbies = ['Skate', 'Code', 'Video Games'];
    this.hello = 'hello';
  }

  onClick() {
    this.name='Navon';
    this.hobbies.push('New Hobby');
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    console.log(hobby);
    for(let i = 0; i<this.hobbies.length; i++) {
      if(this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

}

interface Address {
  street:string,
  city:string,
  state:string
}
