import { WiAttribute } from '../model/WiAttribute';

export class WiEntry {

	name: string = '';
	fullName: string = '';

	parseBaseDescription = true;
	race: string = '';
	sex: string = '';
	age: string = '';

	parseAsYou = false;

	attributes: WiAttribute[] = [];
	
}