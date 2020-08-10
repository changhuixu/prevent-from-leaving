import { Component, OnInit, ViewChild } from '@angular/core';
import { CanComponentDeactivate } from '../guards/prevent-leaving.guard';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, CanComponentDeactivate {
  name = '';
  @ViewChild('form') form: NgForm;

  constructor() {}
  canDeactivate(): boolean {
    if (this.form.submitted || !this.form.dirty) {
      return true;
    } else {
      if (
        confirm('Are you sure that you want to leave without saving changes?')
      ) {
        return true;
      } else {
        return false;
      }
    }
  }

  ngOnInit(): void {}

  submit() {
    console.log(this.form.submitted);
  }
}
