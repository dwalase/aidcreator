import { Component, OnInit } from '@angular/core';
import { WiEntry } from '../model/WiEntry';
import { WiAttribute } from '../model/WiAttribute';
import { WiAttributeDecription } from '../model/WiAttributeDecription';
import { WiValue } from '../model/WiValue';

import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-wi-generator',
  templateUrl: './wi-generator.component.html',
  styleUrls: ['./wi-generator.component.css']
})
export class WiGeneratorComponent implements OnInit {


  menu: MenuItem[];

	entry: WiEntry = new WiEntry();

  constructor() {
    this.menu = this.generateMenuItems();
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

  generateMenuItems(): MenuItem[] {
     return [
            {label: 'Add example apparance', command: () => {
                this.addAttributeBasicApperance();
            }},
            {label: 'Add example personality traits', command: () => {
                this.addExamplePeronalityTraits();
            }}
     ];
  }

  reset(){
    this.entry = new WiEntry();
  }

  private addAttributeBasicApperance() {
    const attribute: WiAttribute = this.addOrFindAttribute('APPEAR');
    attribute.values.push(new WiValue('hair', ['black']));
    attribute.values.push(new WiValue('tall'));
    attribute.values.push(new WiValue('muscular'));
  }

  private addExamplePeronalityTraits() {
    const attribute: WiAttribute = this.addOrFindAttribute('MIND');
    attribute.values.push(new WiValue('glutton'));
    attribute.values.push(new WiValue('lust'));
    attribute.values.push(new WiValue('greedy'));
    attribute.values.push(new WiValue('envious'));
    attribute.values.push(new WiValue('slothful'));
    attribute.values.push(new WiValue('proud '));
  }

  private addOrFindAttribute(descriptor: string): WiAttribute {
    let attribute = this.entry.attributes.find(val => val.name === descriptor);
    if(!attribute) {
      attribute = new WiAttribute(descriptor, []);
      this.entry.attributes.push(attribute);
    }
    return attribute;
  }

}
