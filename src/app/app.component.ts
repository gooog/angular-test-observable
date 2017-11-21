import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/combineLatest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  all: any[];
  greater: any;
  less: any;
  inp: string;
  limit: any;
  s1: Subject<any>;
  s2: Subject<any>;

  constructor() {
      this.s1 = new Subject<any>();
      this.s2 = new Subject<any>();
      this.all = [];
      this.greater = [];
      this.less = [];
      this.limit = 3;
      this.inp = '';
  }

  ngOnInit() {
      this.s1.subscribe((data) => {
          this.all.push(data);
      });
      this.s1.filter(val => val.length > this.limit).subscribe((data) => {
          this.greater.push(data);
      });
      this.s1.filter(val => val.length < this.limit).subscribe((data) => {
          this.less.push(data);
      });
  }

  addWord() {
      if (this.inp === '') { return; }
      this.s1.next(this.inp);
      this.inp = '';
  }

}
