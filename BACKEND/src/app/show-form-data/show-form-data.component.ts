import { Component, OnInit, Input } from '@angular/core';
import {Client} from "../../Types/client";

@Component({
  selector: 'app-show-form-data',
  templateUrl: './show-form-data.component.html',
  styleUrls: ['./show-form-data.component.css']
})
export class ShowFormDataComponent implements OnInit {
  @Input() client: Client | undefined ;
  constructor() { }

  ngOnInit(): void {
  }

}
