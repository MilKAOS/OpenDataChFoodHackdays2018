import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-weekplan',
  templateUrl: './weekplan.component.html',
  styleUrls: ['./weekplan.component.scss']
})
export class WeekplanComponent implements OnInit {

  @Output()
  createShoppingList = new EventEmitter<object>();

  monBr = new FormControl();
  monLu = new FormControl(); 
  monDi = new FormControl();
  monSn = new FormControl();
  tueBr = new FormControl();
  tueLu = new FormControl(); 
  tueDi = new FormControl();
  tueSn = new FormControl();
  wedBr = new FormControl();
  wedLu = new FormControl(); 
  wedDi = new FormControl();
  wedSn = new FormControl();
  thuBr = new FormControl();
  thuLu = new FormControl(); 
  thuDi = new FormControl();
  thuSn = new FormControl();
  friBr = new FormControl();
  friLu = new FormControl(); 
  friDi = new FormControl();
  friSn = new FormControl();
  satBr = new FormControl();
  satLu = new FormControl(); 
  satDi = new FormControl();
  satSn = new FormControl();
  sunBr = new FormControl();
  sunLu = new FormControl(); 
  sunDi = new FormControl();
  sunSn = new FormControl();

  @Input()
  options: Recipe[] = [];

  filteredOptionsMonBr: Observable<string[]>;
  filteredOptionsTueBr: Observable<string[]>;
  filteredOptionsWedBr: Observable<string[]>;
  filteredOptionsThuBr: Observable<string[]>;
  filteredOptionsFriBr: Observable<string[]>;
  filteredOptionsSatBr: Observable<string[]>;
  filteredOptionsSunBr: Observable<string[]>;

  filteredOptionsMonLu: Observable<string[]>;
  filteredOptionsTueLu: Observable<string[]>;
  filteredOptionsWedLu: Observable<string[]>;
  filteredOptionsThuLu: Observable<string[]>;
  filteredOptionsFriLu: Observable<string[]>;
  filteredOptionsSatLu: Observable<string[]>;
  filteredOptionsSunLu: Observable<string[]>;

  filteredOptionsMonDi: Observable<string[]>;
  filteredOptionsTueDi: Observable<string[]>;
  filteredOptionsWedDi: Observable<string[]>;
  filteredOptionsThuDi: Observable<string[]>;
  filteredOptionsFriDi: Observable<string[]>;
  filteredOptionsSatDi: Observable<string[]>;
  filteredOptionsSunDi: Observable<string[]>;

  filteredOptionsMonSn: Observable<string[]>;
  filteredOptionsTueSn: Observable<string[]>;
  filteredOptionsWedSn: Observable<string[]>;
  filteredOptionsThuSn: Observable<string[]>;
  filteredOptionsFriSn: Observable<string[]>;
  filteredOptionsSatSn: Observable<string[]>;
  filteredOptionsSunSn: Observable<string[]>;

  constructor() { }

  ngOnInit() {

    this.filteredOptionsMonBr = this.monBr.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.filteredOptionsTueBr = this.tueBr.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.filteredOptionsWedBr = this.wedBr.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.filteredOptionsThuBr = this.thuBr.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.filteredOptionsFriBr = this.friBr.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.filteredOptionsSatBr = this.satBr.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.filteredOptionsSunBr = this.sunBr.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );


      this.filteredOptionsMonLu = this.monLu.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.filteredOptionsTueLu = this.tueLu.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.filteredOptionsWedLu = this.wedLu.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.filteredOptionsThuLu = this.thuLu.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.filteredOptionsFriLu = this.friLu.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.filteredOptionsSatLu = this.satLu.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.filteredOptionsSunLu = this.sunLu.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.filteredOptionsMonDi = this.monDi.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.filteredOptionsTueDi = this.tueDi.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.filteredOptionsWedDi = this.wedDi.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.filteredOptionsThuDi = this.thuDi.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.filteredOptionsFriDi = this.friDi.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.filteredOptionsSatDi = this.satDi.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.filteredOptionsSunDi = this.sunDi.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.filteredOptionsMonSn = this.monSn.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.filteredOptionsTueSn = this.tueSn.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.filteredOptionsWedSn = this.wedSn.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.filteredOptionsThuSn = this.thuSn.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.filteredOptionsFriSn = this.friSn.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.filteredOptionsSatSn = this.satSn.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.filteredOptionsSunSn = this.sunSn.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.map(r => r.name).filter(option => option.toLowerCase().includes(filterValue));
  }

  onClick() {
    
    var result = []
    .concat(this.monBr.value).concat(this.tueBr.value).concat(this.wedBr.value).concat(this.thuBr.value).concat(this.friBr.value).concat(this.satBr.value).concat(this.sunBr.value)
    .concat(this.monLu.value).concat(this.tueLu.value).concat(this.wedLu.value).concat(this.thuLu.value).concat(this.friLu.value).concat(this.satLu.value).concat(this.sunLu.value)
    .concat(this.monDi.value).concat(this.tueDi.value).concat(this.wedDi.value).concat(this.thuDi.value).concat(this.friDi.value).concat(this.satDi.value).concat(this.sunDi.value)
    .concat(this.monSn.value).concat(this.tueSn.value).concat(this.wedSn.value).concat(this.thuSn.value).concat(this.friSn.value).concat(this.satSn.value).concat(this.sunSn.value)
    
    this.createShoppingList.emit({result: result});
  }

}
