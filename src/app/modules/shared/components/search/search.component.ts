import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() searchValueChange = new EventEmitter();

  form!: FormGroup;

  subscription: Subscription = new Subscription();

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      search: '',
    })
  }

  ngOnInit(): void {
    this.subscription.add(this.form.get('search')!.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(value => this.searchValueChange.emit(value)))
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
