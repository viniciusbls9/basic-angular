import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals = [
    { name: 'Tuca', type: 'Dog' },
    { name: 'Tom', type: 'Cat' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
