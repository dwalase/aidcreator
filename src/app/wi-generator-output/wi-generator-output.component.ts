import { Component, OnInit, Input } from '@angular/core';
import { WiEntry } from '../model/WiEntry';
import { WiParser } from '../model/WiParser';

@Component({
  selector: 'app-wi-generator-output',
  templateUrl: './wi-generator-output.component.html',
  styleUrls: ['./wi-generator-output.component.css']
})
export class WiGeneratorOutputComponent {

  @Input()
  model: WiEntry = new WiEntry();

  get parsedOutput(): string {
  	return new WiParser(this.model).parse();
  } 


}
