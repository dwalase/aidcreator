export class WiAttributeDecription {



	static VALUES: WiAttributeDecription[] = [
		new WiAttributeDecription('APPEAR', 'Appearance'),
		new WiAttributeDecription('MIND', 'Personality'),
		new WiAttributeDecription('WEAR', 'Weared items'),
		new WiAttributeDecription('INV', 'Invertory'),
		new WiAttributeDecription('EQUIP', 'Equiped items'),
		new WiAttributeDecription('SUMMARY', 'General descriptions'),
		new WiAttributeDecription('LIKES', 'Likes'),
		new WiAttributeDecription('HATE', 'Hates'),
		new WiAttributeDecription('LACK', 'Lacks(ie.: eyes)'),
		new WiAttributeDecription('RELATIONS', 'Relations'),
		new WiAttributeDecription('FRIENDS', 'Friends'),
		new WiAttributeDecription('ENEMIES', 'Enemies'),
		new WiAttributeDecription('TALENTS', 'Talents'),
		new WiAttributeDecription('HOBBIES', 'Hobbies'),
		new WiAttributeDecription('POWERS', 'Powers'),
		new WiAttributeDecription('THEME', 'Theme(for series/titles)'),
		new WiAttributeDecription('ORIGIN', 'Origins(for series/titles)'),
		new WiAttributeDecription('ATMOSPHERE', 'Atmosphere(for locations)'),
		new WiAttributeDecription('TONE', 'Tone(for locations)'),
		new WiAttributeDecription('CLIMATE', 'Climate(for locations)'),
		new WiAttributeDecription('GEOGRAPHY', 'Geography(for locations)'),
		new WiAttributeDecription('FEATURES', 'Features(for locations)'),
		new WiAttributeDecription('EXIT', 'Exits(for locations)'),
		new WiAttributeDecription('CITIZENS', 'Citizens(for locations)'),
		new WiAttributeDecription('CENSUS', 'Citizens(for locations)'),
		new WiAttributeDecription('EFFECT', 'Effect(add effects)'),
		new WiAttributeDecription('SEE', 'Sight(ie.: blind)'),
	];

	private label: string;
	
	constructor(private value: string, private description: string) {
		this.label = this.description + ' - ' + value;
	}


}