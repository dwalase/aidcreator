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

  parsedOutput = '';

  refresh() {
  	this.parsedOutput = new WiParser(this.model).parse();;
  }

  coppyToClipboard() {
  	this.refresh();
  	this.copyText(this.parsedOutput);
  }

  copyText(val: string){
  let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }


}
