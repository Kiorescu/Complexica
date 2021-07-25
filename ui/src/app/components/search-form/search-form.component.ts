import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  @Output()
  submitForm: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;
  minDate = new Date();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      cityName: this.fb.control('', Validators.required),
      date: this.fb.control('', Validators.required)
      }
    )
  }

}
