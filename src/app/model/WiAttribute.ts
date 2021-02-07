import { WiValue } from '../model/WiValue';
export class WiAttribute {

	constructor(public name: string = '', public values:WiValue[] = [new WiValue()]){

	}
}