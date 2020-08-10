import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { CanComponentDeactivate } from '../guards/prevent-leaving.guard';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent implements OnInit, CanComponentDeactivate {
  name = '';
  @ViewChild('form') form: NgForm;

  constructor() {}
  ngOnInit(): void {}

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

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (!this.canDeactivate()) {
      $event.returnValue = true;
    }
  }

  submit() {
    console.log(this.form.submitted);
  }
}
