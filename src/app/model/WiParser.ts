import { WiEntry } from '../model/WiEntry';
import { WiAttribute } from '../model/WiAttribute';
import { WiValue } from '../model/WiValue';

export class WiParser {

	private static FULL = '$fullName';
	private static ATTR = '$attrName';
	private static CONTENT = '$content';
	private static NAME = '$name'; 
	private static VALUES = '$values';
	private static PRIMARY_VALUE = '$primary';
	private static SECONDARY_VALUES = '$secondaries';


	private wiTemplate = '$fullName:[$content.]';
	private wiAttrTemplate = '$attrName<$name>:$values';
	private wiComplexValueTemplate = '$primary<$secondaries>';
	private wiValuesConnector = '/';
	private wiAttributeTerminator = ';'
	

	constructor(private model: WiEntry) {}


	parse(): string {
		if(!this.model) {
			return '';
		}

		let content = this.parseSingleAttribute(this.getDesc()) + this.model.attributes.map(val => {
				return this.parseSingleAttribute(val);
			}).reduce((prev, curr) => prev + curr, '');

		if(this.model.fullName){
			let template = this.wiTemplate.replace(WiParser.FULL, this.model.fullName);
			template = template.replace(WiParser.CONTENT, content);
			return template;
		} else {
			return content;
		}
	}

	private getDesc(): WiAttribute {
		const descrVal = new WiValue();
		descrVal.value = this.model.race;
		if(this.model.sex){
			descrVal.secondaryValues.push(this.model.sex);
		}
		if(this.model.age){
			descrVal.secondaryValues.push(this.model.age + 'y');
		}

		return new WiAttribute('', [descrVal]);
	}


	private parseSingleAttribute(attr: WiAttribute): string {
		let valuesStr = this.concatValues(attr.values.map(val => {
				return this.parseSingleValue(val);
			}));
		
		let attrStr = '';
		if(attr.name) {
		   attrStr = this.wiAttrTemplate.replace(WiParser.ATTR, attr.name);
		   attrStr = attrStr.replace(WiParser.NAME, this.model.name);
		   attrStr = attrStr.replace(WiParser.VALUES, valuesStr);
		   attrStr = attrStr;
		} else {
		   attrStr = valuesStr;
		}

		return attrStr ? attrStr + this.wiAttributeTerminator : attrStr;
	}

	private parseSingleValue(val: WiValue): string {
		const secondaryValues = this.concatValues(val.secondaryValues);
		if(secondaryValues) {
			let template = this.wiComplexValueTemplate.replace(WiParser.PRIMARY_VALUE, val.value);
			template = template.replace(WiParser.SECONDARY_VALUES, this.concatValues(val.secondaryValues));
			return template;
		} else {
			return val.value;
		}
	}

	private concatValues(values: string[]): string {
		return values.reduce((prev, curr) => prev ? prev + this.wiValuesConnector + curr : curr, '');
	}
}