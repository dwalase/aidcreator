import { Component, OnInit } from '@angular/core';
import { WiEntry } from '../model/WiEntry';
import { WiAttribute } from '../model/WiAttribute';


@Component({
  selector: 'app-wi-generator',
  templateUrl: './wi-generator.component.html',
  styleUrls: ['./wi-generator.component.css']
})
export class WiGeneratorComponent implements OnInit {

	entry: WiEntry = new WiEntry();

  constructor() {
  	this.addAttribute();
  }

  ngOnInit(): void {
  }

  addAttribute() {
  	this.entry.attributes.push(new WiAttribute());
  }

  removeAttribute(index: number) {
    this.entry.attributes.splice(index, 1);
  }

}
