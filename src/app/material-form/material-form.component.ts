import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


export interface User {
  name: string;
}

@Component({
  selector: 'app-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.css']
})


export class MaterialFormComponent implements OnInit {


  myControl = new FormControl();
  options: User[] = [
    { name: 'Main Building' },
    { name: 'SVC Building' },
    { name: 'CCD Building' },
    { name: 'Roush Building' },
    { name: 'Pasta Building' }
  ];
  filteredOptions: Observable<User[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  displayFn(user?: User): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }


}
