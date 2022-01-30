import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss'],
})
export class WordComponent implements OnInit {
  public letter1: string = '';
  public letter2: string = '';
  public letter3: string = '';
  public letter4: string = '';
  public letter5: string = '';

  constructor() {}

  ngOnInit(): void {}
}
