import { Component, OnInit, Input } from '@angular/core';
import { WiAttribute } from '../model/WiAttribute';
import { WiValue } from '../model/WiValue';
import { WiAttributeDecription } from '../model/WiAttributeDecription';


@Component({
  selector: 'app-wi-attribute',
  templateUrl: './wi-attribute.component.html',
  styleUrls: ['./wi-attribute.component.css']
})
export class WiAttributeComponent {


	@Input()
	wiAttribute: WiAttribute = new WiAttribute();
	possibleAttributes: WiAttributeDecription[] = WiAttributeDecription.VALUES;


	addValue() {
  		this.wiAttribute.values.push(new WiValue());
  	}

	removeValue(index: number) {
  	this.wiAttribute.values.splice(index, 1);
	}

  addSecondaryValue(value: WiValue) {
      value.secondaryValues.push('');
    }

  removeSecondaryValue(value: WiValue, index: number) {
    value.secondaryValues.splice(index, 1);
  }

  trackByFn(index: any, item: any) {
   		return index;
	}

}
