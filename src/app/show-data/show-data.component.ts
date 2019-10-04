import { Component, OnInit } from '@angular/core';

const usersList = [
  { firstName: "Ashish", lastName: "Debnath", gender: "Male" },
  { firstName: "Akash", lastName: "Sharma", gender: "Male" },
  { firstName: "Smriti", lastName: "Sharma", gender: "Female" },
  { firstName: "Akansha", lastName: "Arora", gender: "Female" },
]
@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  constructor() { }

  displayedColumns: string[] = ['First Name', 'Last Name', 'Gender'];
  dataSource = usersList;
  ngOnInit() {
  }

}
