export enum GemType {
  Int = 1,
  Dex = 2,
  Str = 3,
  White = 4,
}

export interface Gem {
  name: string;
  type: GemType;
  level: number;
}

export const gems: ReadonlyArray<Gem> = [
  {
    name: 'Vaal Cleave',
    type: GemType.Str,
    level: 1,
  },
  {
    name: 'Vaal Molten Strike',
    type: GemType.Str,
    level: 1,
  },
  {
    name: 'Vaal Smite',
    type: GemType.Str,
    level: 1,
  },
  {
    name: 'Perforate',
    type: GemType.Str,
    level: 1,
  },
  {
    name: 'Cleave',
    type: GemType.Str,
    level: 1,
  },
  {
    name: 'Glacial Hammer',
    type: GemType.Str,
    level: 1,
  },
  {
    name: 'Ground Slam',
    type: GemType.Str,
    level: 1,
  },
  {
    name: 'Heavy Strike',
    type: GemType.Str,
    level: 1,
  },
  {
    name: 'Molten Strike',
    type: GemType.Str,
    level: 1,
  },
  {
    name: 'Shield Crush',
    type: GemType.Str,
    level: 1,
  },
  {
    name: 'Smite',
    type: GemType.Str,
    level: 1,
  },
  {
    name: 'Vaal Glacial Hammer',
    type: GemType.Str,
    level: 1,
  },
  {
    name: 'Vaal Ground Slam',
    type: GemType.Str,
    level: 1,
  },
  {
    name: 'Vaal Rejuvenation Totem',
    type: GemType.Str,
    level: 4,
  },
  {
    name: 'Ancestral Protector',
    type: GemType.Str,
    level: 4,
  },
  {
    name: 'Blood and Sand',
    type: GemType.Str,
    level: 4,
  },
  {
    name: 'Decoy Totem',
    type: GemType.Str,
    level: 4,
  },
  {
    name: 'Devouring Totem',
    type: GemType.Str,
    level: 4,
  },
  {
    name: 'Holy Flame Totem',
    type: GemType.Str,
    level: 4,
  },
  {
    name: 'Molten Shell',
    type: GemType.Str,
    level: 4,
  },
  {
    name: 'Steelskin',
    type: GemType.Str,
    level: 4,
  },
  {
    name: 'Rejuvenation Totem',
    type: GemType.Str,
    level: 4,
  },
  {
    name: 'Reckoning',
    type: GemType.Str,
    level: 4,
  },
  {
    name: 'Vaal Molten Shell',
    type: GemType.Str,
    level: 4,
  },
  {
    name: 'Vigilant Strike',
    type: GemType.Str,
    level: 4,
  },
  {
    name: 'War Banner',
    type: GemType.Str,
    level: 4,
  },
  {
    name: 'Enduring Cry',
    type: GemType.Str,
    level: 10,
  },
  {
    name: 'Intimidating Cry',
    type: GemType.Str,
    level: 10,
  },
  {
    name: 'Leap Slam',
    type: GemType.Str,
    level: 10,
  },
  {
    name: 'Shield Charge',
    type: GemType.Str,
    level: 10,
  },
  {
    name: 'Vitality',
    type: GemType.Str,
    level: 10,
  },
  {
    name: 'Vaal Absolution',
    type: GemType.Str,
    level: 12,
  },
  {
    name: 'Vaal Volcanic Fissure',
    type: GemType.Str,
    level: 12,
  },
  {
    name: 'Volcanic Fissure',
    type: GemType.Str,
    level: 12,
  },
  {
    name: 'Absolution',
    type: GemType.Str,
    level: 12,
  },
  {
    name: 'Exsanguinate',
    type: GemType.Str,
    level: 12,
  },
  {
    name: 'Chain Hook',
    type: GemType.Str,
    level: 12,
  },
  {
    name: 'Infernal Blow',
    type: GemType.Str,
    level: 12,
  },
  {
    name: 'Searing Bond',
    type: GemType.Str,
    level: 12,
  },
  {
    name: 'Sunder',
    type: GemType.Str,
    level: 12,
  },
  {
    name: 'Earthshatter',
    type: GemType.Str,
    level: 12,
  },
  {
    name: 'Sweep',
    type: GemType.Str,
    level: 12,
  },
  {
    name: 'Static Strike',
    type: GemType.Str,
    level: 12,
  },
  {
    name: 'Ancestral Cry',
    type: GemType.Str,
    level: 16,
  },
  {
    name: 'Defiance Banner',
    type: GemType.Str,
    level: 16,
  },
  {
    name: 'Flesh and Stone',
    type: GemType.Str,
    level: 16,
  },
  {
    name: 'Corrupting Fever',
    type: GemType.Str,
    level: 16,
  },
  {
    name: 'Herald of Purity',
    type: GemType.Str,
    level: 16,
  },
  {
    name: 'Herald of Ash',
    type: GemType.Str,
    level: 16,
  },
  {
    name: 'Seismic Cry',
    type: GemType.Str,
    level: 16,
  },
  {
    name: "Warlord's Mark",
    type: GemType.Str,
    level: 16,
  },
  {
    name: 'Anger',
    type: GemType.Str,
    level: 24,
  },
  {
    name: 'Determination',
    type: GemType.Str,
    level: 24,
  },
  {
    name: "Battlemage's Cry",
    type: GemType.Str,
    level: 24,
  },
  {
    name: 'Dread Banner',
    type: GemType.Str,
    level: 24,
  },
  {
    name: 'Purity of Fire',
    type: GemType.Str,
    level: 24,
  },
  {
    name: "General's Cry",
    type: GemType.Str,
    level: 24,
  },
  {
    name: 'Infernal Cry',
    type: GemType.Str,
    level: 24,
  },
  {
    name: 'Petrified Blood',
    type: GemType.Str,
    level: 24,
  },
  {
    name: 'Pride',
    type: GemType.Str,
    level: 24,
  },
  {
    name: 'Punishment',
    type: GemType.Str,
    level: 24,
  },
  {
    name: 'Rallying Cry',
    type: GemType.Str,
    level: 24,
  },
  {
    name: 'Vaal Impurity of Fire',
    type: GemType.Str,
    level: 24,
  },
  {
    name: 'Vengeance',
    type: GemType.Str,
    level: 24,
  },
  {
    name: 'Vulnerability',
    type: GemType.Str,
    level: 24,
  },
  {
    name: 'Vaal Reap',
    type: GemType.Str,
    level: 28,
  },
  {
    name: 'Vaal Domination',
    type: GemType.Str,
    level: 28,
  },
  {
    name: 'Animate Guardian',
    type: GemType.Str,
    level: 28,
  },
  {
    name: 'Boneshatter',
    type: GemType.Str,
    level: 28,
  },
  {
    name: 'Reap',
    type: GemType.Str,
    level: 28,
  },
  {
    name: 'Bladestorm',
    type: GemType.Str,
    level: 28,
  },
  {
    name: 'Dominating Blow',
    type: GemType.Str,
    level: 28,
  },
  {
    name: 'Consecrated Path',
    type: GemType.Str,
    level: 28,
  },
  {
    name: 'Ice Crash',
    type: GemType.Str,
    level: 28,
  },
  {
    name: 'Earthquake',
    type: GemType.Str,
    level: 28,
  },
  {
    name: 'Rage Vortex',
    type: GemType.Str,
    level: 28,
  },
  {
    name: 'Shockwave Totem',
    type: GemType.Str,
    level: 28,
  },
  {
    name: 'Ancestral Warchief',
    type: GemType.Str,
    level: 28,
  },
  {
    name: 'Vaal Ancestral Warchief',
    type: GemType.Str,
    level: 28,
  },
  {
    name: 'Tectonic Slam',
    type: GemType.Str,
    level: 28,
  },
  {
    name: 'Vaal Earthquake',
    type: GemType.Str,
    level: 28,
  },
  {
    name: 'Frozen Legion',
    type: GemType.Str,
    level: 34,
  },
  {
    name: 'Berserk',
    type: GemType.Str,
    level: 34,
  },
  {
    name: 'Protective Link',
    type: GemType.Str,
    level: 34,
  },
  {
    name: 'Summon Flame Golem',
    type: GemType.Str,
    level: 34,
  },
  {
    name: 'Flame Link',
    type: GemType.Str,
    level: 34,
  },
  {
    name: 'Immortal Call',
    type: GemType.Str,
    level: 34,
  },
  {
    name: 'Summon Stone Golem',
    type: GemType.Str,
    level: 34,
  },
  {
    name: 'Vaal Immortal Call',
    type: GemType.Str,
    level: 34,
  },
  {
    name: 'Vaal Ice Shot',
    type: GemType.Dex,
    level: 1,
  },
  {
    name: 'Vaal Caustic Arrow',
    type: GemType.Dex,
    level: 1,
  },
  {
    name: 'Vaal Split Arrow',
    type: GemType.Dex,
    level: 1,
  },
  {
    name: 'Burning Arrow',
    type: GemType.Dex,
    level: 1,
  },
  {
    name: 'Cobra Lash',
    type: GemType.Dex,
    level: 1,
  },
  {
    name: 'Double Strike',
    type: GemType.Dex,
    level: 1,
  },
  {
    name: 'Dual Strike',
    type: GemType.Dex,
    level: 1,
  },
  {
    name: 'Ethereal Knives',
    type: GemType.Dex,
    level: 1,
  },
  {
    name: 'Spectral Throw',
    type: GemType.Dex,
    level: 1,
  },
  {
    name: 'Ice Shot',
    type: GemType.Dex,
    level: 1,
  },
  {
    name: 'Frost Blades',
    type: GemType.Dex,
    level: 1,
  },
  {
    name: 'Splitting Steel',
    type: GemType.Dex,
    level: 1,
  },
  {
    name: 'Caustic Arrow',
    type: GemType.Dex,
    level: 1,
  },
  {
    name: 'Galvanic Arrow',
    type: GemType.Dex,
    level: 1,
  },
  {
    name: 'Explosive Trap',
    type: GemType.Dex,
    level: 1,
  },
  {
    name: 'Split Arrow',
    type: GemType.Dex,
    level: 1,
  },
  {
    name: 'Vaal Burning Arrow',
    type: GemType.Dex,
    level: 1,
  },
  {
    name: 'Vaal Spectral Throw',
    type: GemType.Dex,
    level: 1,
  },
  {
    name: 'Vaal Double Strike',
    type: GemType.Dex,
    level: 1,
  },
  {
    name: 'Viper Strike',
    type: GemType.Dex,
    level: 1,
  },
  {
    name: 'Vaal Animate Weapon',
    type: GemType.Dex,
    level: 4,
  },
  {
    name: 'Animate Weapon',
    type: GemType.Dex,
    level: 4,
  },
  {
    name: 'Bear Trap',
    type: GemType.Dex,
    level: 4,
  },
  {
    name: 'Detonate Dead',
    type: GemType.Dex,
    level: 4,
  },
  {
    name: "Sniper's Mark",
    type: GemType.Dex,
    level: 4,
  },
  {
    name: 'Puncture',
    type: GemType.Dex,
    level: 4,
  },
  {
    name: 'Dash',
    type: GemType.Dex,
    level: 4,
  },
  {
    name: 'Riposte',
    type: GemType.Dex,
    level: 4,
  },
  {
    name: 'Shrapnel Ballista',
    type: GemType.Dex,
    level: 4,
  },
  {
    name: 'Vaal Detonate Dead',
    type: GemType.Dex,
    level: 4,
  },
  {
    name: 'Snipe',
    type: GemType.Dex,
    level: 5,
  },
  {
    name: 'Vaal Flicker Strike',
    type: GemType.Dex,
    level: 10,
  },
  {
    name: 'Precision',
    type: GemType.Dex,
    level: 10,
  },
  {
    name: 'Unearth',
    type: GemType.Dex,
    level: 10,
  },
  {
    name: 'Blink Arrow',
    type: GemType.Dex,
    level: 10,
  },
  {
    name: 'Flicker Strike',
    type: GemType.Dex,
    level: 10,
  },
  {
    name: 'Mirror Arrow',
    type: GemType.Dex,
    level: 10,
  },
  {
    name: 'Smoke Mine',
    type: GemType.Dex,
    level: 10,
  },
  {
    name: 'Whirling Blades',
    type: GemType.Dex,
    level: 10,
  },
  {
    name: 'Withering Step',
    type: GemType.Dex,
    level: 10,
  },
  {
    name: 'Vaal Lightning Arrow',
    type: GemType.Dex,
    level: 12,
  },
  {
    name: 'Vaal Venom Gyre',
    type: GemType.Dex,
    level: 12,
  },
  {
    name: 'Barrage',
    type: GemType.Dex,
    level: 12,
  },
  {
    name: 'Blade Trap',
    type: GemType.Dex,
    level: 12,
  },
  {
    name: 'Siege Ballista',
    type: GemType.Dex,
    level: 12,
  },
  {
    name: 'Lacerate',
    type: GemType.Dex,
    level: 12,
  },
  {
    name: 'Elemental Hit',
    type: GemType.Dex,
    level: 12,
  },
  {
    name: 'Fire Trap',
    type: GemType.Dex,
    level: 12,
  },
  {
    name: 'Lightning Arrow',
    type: GemType.Dex,
    level: 12,
  },
  {
    name: 'Lightning Strike',
    type: GemType.Dex,
    level: 12,
  },
  {
    name: 'Poisonous Concoction',
    type: GemType.Dex,
    level: 12,
  },
  {
    name: 'Rain of Arrows',
    type: GemType.Dex,
    level: 12,
  },
  {
    name: 'Toxic Rain',
    type: GemType.Dex,
    level: 12,
  },
  {
    name: 'Reave',
    type: GemType.Dex,
    level: 12,
  },
  {
    name: 'Shattering Steel',
    type: GemType.Dex,
    level: 12,
  },
  {
    name: 'Venom Gyre',
    type: GemType.Dex,
    level: 12,
  },
  {
    name: 'Spectral Helix',
    type: GemType.Dex,
    level: 12,
  },
  {
    name: 'Blade Vortex',
    type: GemType.Dex,
    level: 12,
  },
  {
    name: 'Vaal Lightning Strike',
    type: GemType.Dex,
    level: 12,
  },
  {
    name: 'Vaal Blade Vortex',
    type: GemType.Dex,
    level: 12,
  },
  {
    name: 'Vaal Rain of Arrows',
    type: GemType.Dex,
    level: 12,
  },
  {
    name: 'Vaal Reave',
    type: GemType.Dex,
    level: 12,
  },
  {
    name: 'Volatile Dead',
    type: GemType.Dex,
    level: 12,
  },
  {
    name: 'Vaal Arctic Armour',
    type: GemType.Dex,
    level: 16,
  },
  {
    name: 'Blood Rage',
    type: GemType.Dex,
    level: 16,
  },
  {
    name: 'Blade Blast',
    type: GemType.Dex,
    level: 16,
  },
  {
    name: 'Desecrate',
    type: GemType.Dex,
    level: 16,
  },
  {
    name: 'Ensnaring Arrow',
    type: GemType.Dex,
    level: 16,
  },
  {
    name: 'Frenzy',
    type: GemType.Dex,
    level: 16,
  },
  {
    name: 'Herald of Agony',
    type: GemType.Dex,
    level: 16,
  },
  {
    name: 'Herald of Ice',
    type: GemType.Dex,
    level: 16,
  },
  {
    name: 'Arctic Armour',
    type: GemType.Dex,
    level: 16,
  },
  {
    name: "Poacher's Mark",
    type: GemType.Dex,
    level: 16,
  },
  {
    name: "Alchemist's Mark",
    type: GemType.Dex,
    level: 24,
  },
  {
    name: 'Purity of Ice',
    type: GemType.Dex,
    level: 24,
  },
  {
    name: 'Grace',
    type: GemType.Dex,
    level: 24,
  },
  {
    name: 'Haste',
    type: GemType.Dex,
    level: 24,
  },
  {
    name: 'Hatred',
    type: GemType.Dex,
    level: 24,
  },
  {
    name: 'Plague Bearer',
    type: GemType.Dex,
    level: 24,
  },
  {
    name: 'Temporal Chains',
    type: GemType.Dex,
    level: 24,
  },
  {
    name: 'Vaal Impurity of Ice',
    type: GemType.Dex,
    level: 24,
  },
  {
    name: 'Vaal Grace',
    type: GemType.Dex,
    level: 24,
  },
  {
    name: 'Vaal Haste',
    type: GemType.Dex,
    level: 24,
  },
  {
    name: 'Vaal Blade Flurry',
    type: GemType.Dex,
    level: 28,
  },
  {
    name: 'Blast Rain',
    type: GemType.Dex,
    level: 28,
  },
  {
    name: 'Blade Flurry',
    type: GemType.Dex,
    level: 28,
  },
  {
    name: 'Charged Dash',
    type: GemType.Dex,
    level: 28,
  },
  {
    name: 'Cremation',
    type: GemType.Dex,
    level: 28,
  },
  {
    name: 'Cyclone',
    type: GemType.Dex,
    level: 28,
  },
  {
    name: 'Wild Strike',
    type: GemType.Dex,
    level: 28,
  },
  {
    name: 'Explosive Arrow',
    type: GemType.Dex,
    level: 28,
  },
  {
    name: 'Explosive Concoction',
    type: GemType.Dex,
    level: 28,
  },
  {
    name: 'Flamethrower Trap',
    type: GemType.Dex,
    level: 28,
  },
  {
    name: 'Ice Trap',
    type: GemType.Dex,
    level: 28,
  },
  {
    name: 'Lancing Steel',
    type: GemType.Dex,
    level: 28,
  },
  {
    name: 'Pestilent Strike',
    type: GemType.Dex,
    level: 28,
  },
  {
    name: 'Artillery Ballista',
    type: GemType.Dex,
    level: 28,
  },
  {
    name: 'Storm Rain',
    type: GemType.Dex,
    level: 28,
  },
  {
    name: 'Bladefall',
    type: GemType.Dex,
    level: 28,
  },
  {
    name: 'Seismic Trap',
    type: GemType.Dex,
    level: 28,
  },
  {
    name: 'Spectral Shield Throw',
    type: GemType.Dex,
    level: 28,
  },
  {
    name: 'Tornado Shot',
    type: GemType.Dex,
    level: 28,
  },
  {
    name: 'Vaal Cyclone',
    type: GemType.Dex,
    level: 28,
  },
  {
    name: 'Scourge Arrow',
    type: GemType.Dex,
    level: 28,
  },
  {
    name: 'Snipe',
    type: GemType.Dex,
    level: 34,
  },
  {
    name: 'Ambush',
    type: GemType.Dex,
    level: 34,
  },
  {
    name: 'Temporal Rift',
    type: GemType.Dex,
    level: 34,
  },
  {
    name: 'Summon Ice Golem',
    type: GemType.Dex,
    level: 34,
  },
  {
    name: 'Vampiric Link',
    type: GemType.Dex,
    level: 34,
  },
  {
    name: 'Phase Run',
    type: GemType.Dex,
    level: 34,
  },
  {
    name: 'Tornado',
    type: GemType.Dex,
    level: 34,
  },
  {
    name: 'Intuitive Link',
    type: GemType.Dex,
    level: 34,
  },
  {
    name: 'Blight',
    type: GemType.Int,
    level: 1,
  },
  {
    name: 'Rolling Magma',
    type: GemType.Int,
    level: 1,
  },
  {
    name: 'Fireball',
    type: GemType.Int,
    level: 1,
  },
  {
    name: 'Frostbolt',
    type: GemType.Int,
    level: 1,
  },
  {
    name: 'Freezing Pulse',
    type: GemType.Int,
    level: 1,
  },
  {
    name: 'Stormblast Mine',
    type: GemType.Int,
    level: 1,
  },
  {
    name: 'Lightning Tendrils',
    type: GemType.Int,
    level: 1,
  },
  {
    name: 'Purifying Flame',
    type: GemType.Int,
    level: 1,
  },
  {
    name: 'Raise Zombie',
    type: GemType.Int,
    level: 1,
  },
  {
    name: 'Spark',
    type: GemType.Int,
    level: 1,
  },
  {
    name: 'Vaal Blight',
    type: GemType.Int,
    level: 1,
  },
  {
    name: 'Vaal Fireball',
    type: GemType.Int,
    level: 1,
  },
  {
    name: 'Vaal Spark',
    type: GemType.Int,
    level: 1,
  },
  {
    name: 'Kinetic Bolt',
    type: GemType.Int,
    level: 1,
  },
  {
    name: 'Contagion',
    type: GemType.Int,
    level: 4,
  },
  {
    name: 'Conversion Trap',
    type: GemType.Int,
    level: 4,
  },
  {
    name: 'Flame Wall',
    type: GemType.Int,
    level: 4,
  },
  {
    name: 'Frost Bomb',
    type: GemType.Int,
    level: 4,
  },
  {
    name: 'Frost Wall',
    type: GemType.Int,
    level: 4,
  },
  {
    name: 'Frostblink',
    type: GemType.Int,
    level: 4,
  },
  {
    name: 'Summon Holy Relic',
    type: GemType.Int,
    level: 4,
  },
  {
    name: 'Orb of Storms',
    type: GemType.Int,
    level: 4,
  },
  {
    name: 'Summon Raging Spirit',
    type: GemType.Int,
    level: 4,
  },
  {
    name: 'Bodyswap',
    type: GemType.Int,
    level: 10,
  },
  {
    name: 'Clarity',
    type: GemType.Int,
    level: 10,
  },
  {
    name: 'Flame Dash',
    type: GemType.Int,
    level: 10,
  },
  {
    name: 'Siphoning Trap',
    type: GemType.Int,
    level: 10,
  },
  {
    name: 'Lightning Warp',
    type: GemType.Int,
    level: 10,
  },
  {
    name: 'Summon Skeletons',
    type: GemType.Int,
    level: 10,
  },
  {
    name: 'Vaal Clarity',
    type: GemType.Int,
    level: 10,
  },
  {
    name: 'Vaal Lightning Warp',
    type: GemType.Int,
    level: 10,
  },
  {
    name: 'Vaal Summon Skeletons',
    type: GemType.Int,
    level: 10,
  },
  {
    name: 'Wither',
    type: GemType.Int,
    level: 10,
  },
  {
    name: 'Arc',
    type: GemType.Int,
    level: 12,
  },
  {
    name: 'Creeping Frost',
    type: GemType.Int,
    level: 12,
  },
  {
    name: 'Bone Offering',
    type: GemType.Int,
    level: 12,
  },
  {
    name: 'Storm Brand',
    type: GemType.Int,
    level: 12,
  },
  {
    name: 'Icicle Mine',
    type: GemType.Int,
    level: 12,
  },
  {
    name: 'Blazing Salvo',
    type: GemType.Int,
    level: 12,
  },
  {
    name: 'Scorching Ray',
    type: GemType.Int,
    level: 12,
  },
  {
    name: 'Incinerate',
    type: GemType.Int,
    level: 12,
  },
  {
    name: 'Flame Surge',
    type: GemType.Int,
    level: 12,
  },
  {
    name: 'Flesh Offering',
    type: GemType.Int,
    level: 12,
  },
  {
    name: 'Ice Nova',
    type: GemType.Int,
    level: 12,
  },
  {
    name: 'Ice Spear',
    type: GemType.Int,
    level: 12,
  },
  {
    name: 'Lightning Trap',
    type: GemType.Int,
    level: 12,
  },
  {
    name: 'Manabond',
    type: GemType.Int,
    level: 12,
  },
  {
    name: 'Power Siphon',
    type: GemType.Int,
    level: 12,
  },
  {
    name: 'Essence Drain',
    type: GemType.Int,
    level: 12,
  },
  {
    name: 'Spirit Offering',
    type: GemType.Int,
    level: 12,
  },
  {
    name: 'Storm Burst',
    type: GemType.Int,
    level: 12,
  },
  {
    name: 'Storm Call',
    type: GemType.Int,
    level: 12,
  },
  {
    name: 'Vaal Arc',
    type: GemType.Int,
    level: 12,
  },
  {
    name: 'Vaal Ice Nova',
    type: GemType.Int,
    level: 12,
  },
  {
    name: 'Vaal Lightning Trap',
    type: GemType.Int,
    level: 12,
  },
  {
    name: 'Vaal Storm Call',
    type: GemType.Int,
    level: 12,
  },
  {
    name: 'Vaal Power Siphon',
    type: GemType.Int,
    level: 12,
  },
  {
    name: 'Voltaxic Burst',
    type: GemType.Int,
    level: 12,
  },
  {
    name: 'Wintertide Brand',
    type: GemType.Int,
    level: 12,
  },
  {
    name: "Assassin's Mark",
    type: GemType.Int,
    level: 16,
  },
  {
    name: 'Arcane Cloak',
    type: GemType.Int,
    level: 16,
  },
  {
    name: 'Cold Snap',
    type: GemType.Int,
    level: 16,
  },
  {
    name: 'Galvanic Field',
    type: GemType.Int,
    level: 16,
  },
  {
    name: 'Herald of Thunder',
    type: GemType.Int,
    level: 16,
  },
  {
    name: 'Wave of Conviction',
    type: GemType.Int,
    level: 16,
  },
  {
    name: 'Brand Recall',
    type: GemType.Int,
    level: 16,
  },
  {
    name: 'Righteous Fire',
    type: GemType.Int,
    level: 16,
  },
  {
    name: 'Summon Skitterbots',
    type: GemType.Int,
    level: 16,
  },
  {
    name: 'Forbidden Rite',
    type: GemType.Int,
    level: 16,
  },
  {
    name: 'Tempest Shield',
    type: GemType.Int,
    level: 16,
  },
  {
    name: 'Vaal Cold Snap',
    type: GemType.Int,
    level: 16,
  },
  {
    name: 'Vaal Righteous Fire',
    type: GemType.Int,
    level: 16,
  },
  {
    name: 'Convocation',
    type: GemType.Int,
    level: 24,
  },
  {
    name: 'Conductivity',
    type: GemType.Int,
    level: 24,
  },
  {
    name: 'Bane',
    type: GemType.Int,
    level: 24,
  },
  {
    name: 'Malevolence',
    type: GemType.Int,
    level: 24,
  },
  {
    name: 'Despair',
    type: GemType.Int,
    level: 24,
  },
  {
    name: 'Discipline',
    type: GemType.Int,
    level: 24,
  },
  {
    name: 'Elemental Weakness',
    type: GemType.Int,
    level: 24,
  },
  {
    name: 'Enfeeble',
    type: GemType.Int,
    level: 24,
  },
  {
    name: 'Flammability',
    type: GemType.Int,
    level: 24,
  },
  {
    name: 'Frostbite',
    type: GemType.Int,
    level: 24,
  },
  {
    name: 'Purity of Lightning',
    type: GemType.Int,
    level: 24,
  },
  {
    name: 'Purity of Elements',
    type: GemType.Int,
    level: 24,
  },
  {
    name: 'Zealotry',
    type: GemType.Int,
    level: 24,
  },
  {
    name: 'Spellslinger',
    type: GemType.Int,
    level: 24,
  },
  {
    name: 'Energy Blade',
    type: GemType.Int,
    level: 24,
  },
  {
    name: 'Vaal Discipline',
    type: GemType.Int,
    level: 24,
  },
  {
    name: 'Vaal Impurity of Lightning',
    type: GemType.Int,
    level: 24,
  },
  {
    name: 'Wrath',
    type: GemType.Int,
    level: 24,
  },
  {
    name: 'Vaal Firestorm',
    type: GemType.Int,
    level: 28,
  },
  {
    name: 'Armageddon Brand',
    type: GemType.Int,
    level: 28,
  },
  {
    name: 'Ball Lightning',
    type: GemType.Int,
    level: 28,
  },
  {
    name: 'Flameblast',
    type: GemType.Int,
    level: 28,
  },
  {
    name: 'Kinetic Blast',
    type: GemType.Int,
    level: 28,
  },
  {
    name: 'Discharge',
    type: GemType.Int,
    level: 28,
  },
  {
    name: 'Crackling Lance',
    type: GemType.Int,
    level: 28,
  },
  {
    name: 'Divine Ire',
    type: GemType.Int,
    level: 28,
  },
  {
    name: 'Hexblast',
    type: GemType.Int,
    level: 28,
  },
  {
    name: 'Lightning Conduit',
    type: GemType.Int,
    level: 28,
  },
  {
    name: 'Pyroclast Mine',
    type: GemType.Int,
    level: 28,
  },
  {
    name: 'Firestorm',
    type: GemType.Int,
    level: 28,
  },
  {
    name: 'Eye of Winter',
    type: GemType.Int,
    level: 28,
  },
  {
    name: 'Winter Orb',
    type: GemType.Int,
    level: 28,
  },
  {
    name: 'Vortex',
    type: GemType.Int,
    level: 28,
  },
  {
    name: 'Lightning Spire Trap',
    type: GemType.Int,
    level: 28,
  },
  {
    name: 'Penance Brand',
    type: GemType.Int,
    level: 28,
  },
  {
    name: 'Raise Spectre',
    type: GemType.Int,
    level: 28,
  },
  {
    name: 'Dark Pact',
    type: GemType.Int,
    level: 28,
  },
  {
    name: 'Shock Nova',
    type: GemType.Int,
    level: 28,
  },
  {
    name: 'Soulrend',
    type: GemType.Int,
    level: 28,
  },
  {
    name: 'Stormbind',
    type: GemType.Int,
    level: 28,
  },
  {
    name: 'Summon Reaper',
    type: GemType.Int,
    level: 28,
  },
  {
    name: 'Glacial Cascade',
    type: GemType.Int,
    level: 28,
  },
  {
    name: 'Vaal Flameblast',
    type: GemType.Int,
    level: 28,
  },
  {
    name: 'Void Sphere',
    type: GemType.Int,
    level: 34,
  },
  {
    name: 'Summon Chaos Golem',
    type: GemType.Int,
    level: 34,
  },
  {
    name: 'Sigil of Power',
    type: GemType.Int,
    level: 34,
  },
  {
    name: 'Destructive Link',
    type: GemType.Int,
    level: 34,
  },
  {
    name: 'Frost Shield',
    type: GemType.Int,
    level: 34,
  },
  {
    name: 'Hydrosphere',
    type: GemType.Int,
    level: 34,
  },
  {
    name: 'Summon Lightning Golem',
    type: GemType.Int,
    level: 34,
  },
  {
    name: 'Soul Link',
    type: GemType.Int,
    level: 34,
  },
  {
    name: 'Summon Carrion Golem',
    type: GemType.Int,
    level: 34,
  },
  {
    name: 'Arcanist Brand',
    type: GemType.Int,
    level: 38,
  },
  {
    name: 'Quickstep',
    type: GemType.White,
    level: 1,
  },
  {
    name: 'Portal',
    type: GemType.White,
    level: 10,
  },
  {
    name: 'Chance to Bleed',
    type: GemType.Str,
    level: 1,
  },
  {
    name: 'Empower',
    type: GemType.Str,
    level: 1,
  },
  {
    name: 'Ruthless',
    type: GemType.Str,
    level: 1,
  },
  {
    name: 'Ancestral Call',
    type: GemType.Str,
    level: 4,
  },
  {
    name: 'Maim',
    type: GemType.Str,
    level: 8,
  },
  {
    name: 'Added Fire Damage',
    type: GemType.Str,
    level: 8,
  },
  {
    name: 'Earthbreaker',
    type: GemType.Str,
    level: 8,
  },
  {
    name: 'Knockback',
    type: GemType.Str,
    level: 8,
  },
  {
    name: 'Lifetap',
    type: GemType.Str,
    level: 8,
  },
  {
    name: 'Life Gain on Hit',
    type: GemType.Str,
    level: 8,
  },
  {
    name: 'Ballista Totem',
    type: GemType.Str,
    level: 8,
  },
  {
    name: 'Stun',
    type: GemType.Str,
    level: 8,
  },
  {
    name: 'Melee Splash',
    type: GemType.Str,
    level: 8,
  },
  {
    name: 'Spell Totem',
    type: GemType.Str,
    level: 8,
  },
  {
    name: 'Damage on Full Life',
    type: GemType.Str,
    level: 18,
  },
  {
    name: 'Bloodlust',
    type: GemType.Str,
    level: 18,
  },
  {
    name: 'Cold to Fire',
    type: GemType.Str,
    level: 18,
  },
  {
    name: 'Endurance Charge on Melee Stun',
    type: GemType.Str,
    level: 18,
  },
  {
    name: 'Cruelty',
    type: GemType.Str,
    level: 18,
  },
  {
    name: 'Melee Physical Damage',
    type: GemType.Str,
    level: 18,
  },
  {
    name: 'Iron Grip',
    type: GemType.Str,
    level: 18,
  },
  {
    name: 'Iron Will',
    type: GemType.Str,
    level: 18,
  },
  {
    name: 'Rage',
    type: GemType.Str,
    level: 18,
  },
  {
    name: 'Shockwave',
    type: GemType.Str,
    level: 18,
  },
  {
    name: 'Elemental Damage with Attacks',
    type: GemType.Str,
    level: 18,
  },
  {
    name: 'Divine Blessing',
    type: GemType.Str,
    level: 31,
  },
  {
    name: 'Arrogance',
    type: GemType.Str,
    level: 31,
  },
  {
    name: 'Bloodthirst',
    type: GemType.Str,
    level: 31,
  },
  {
    name: 'Fire Penetration',
    type: GemType.Str,
    level: 31,
  },
  {
    name: 'Fortify',
    type: GemType.Str,
    level: 31,
  },
  {
    name: 'Generosity',
    type: GemType.Str,
    level: 31,
  },
  {
    name: 'Burning Damage',
    type: GemType.Str,
    level: 31,
  },
  {
    name: 'Increased Duration',
    type: GemType.Str,
    level: 31,
  },
  {
    name: 'Life Leech',
    type: GemType.Str,
    level: 31,
  },
  {
    name: 'Pulverise',
    type: GemType.Str,
    level: 31,
  },
  {
    name: 'Less Duration',
    type: GemType.Str,
    level: 31,
  },
  {
    name: 'Inspiration',
    type: GemType.Str,
    level: 31,
  },
  {
    name: 'Urgent Orders',
    type: GemType.Str,
    level: 31,
  },
  {
    name: 'Multiple Totems',
    type: GemType.Str,
    level: 38,
  },
  {
    name: 'Eternal Blessing',
    type: GemType.Str,
    level: 38,
  },
  {
    name: 'Brutality',
    type: GemType.Str,
    level: 38,
  },
  {
    name: 'Cast on Melee Kill',
    type: GemType.Str,
    level: 38,
  },
  {
    name: 'Cast when Damage Taken',
    type: GemType.Str,
    level: 38,
  },
  {
    name: 'Behead',
    type: GemType.Str,
    level: 38,
  },
  {
    name: 'Fist of War',
    type: GemType.Str,
    level: 38,
  },
  {
    name: 'Multistrike',
    type: GemType.Str,
    level: 38,
  },
  {
    name: 'Momentum',
    type: GemType.Dex,
    level: 1,
  },
  {
    name: 'Chance to Poison',
    type: GemType.Dex,
    level: 1,
  },
  {
    name: 'Enhance',
    type: GemType.Dex,
    level: 1,
  },
  {
    name: 'Mirage Archer',
    type: GemType.Dex,
    level: 4,
  },
  {
    name: 'Volley',
    type: GemType.Dex,
    level: 4,
  },
  {
    name: 'Pierce',
    type: GemType.Dex,
    level: 4,
  },
  {
    name: 'Swift Assembly',
    type: GemType.Dex,
    level: 4,
  },
  {
    name: 'Manaforged Arrows',
    type: GemType.Dex,
    level: 8,
  },
  {
    name: 'Multiple Traps',
    type: GemType.Dex,
    level: 8,
  },
  {
    name: 'Added Cold Damage',
    type: GemType.Dex,
    level: 8,
  },
  {
    name: 'Blind',
    type: GemType.Dex,
    level: 8,
  },
  {
    name: 'Chance to Flee',
    type: GemType.Dex,
    level: 8,
  },
  {
    name: 'Faster Attacks',
    type: GemType.Dex,
    level: 8,
  },
  {
    name: 'Arrow Nova',
    type: GemType.Dex,
    level: 8,
  },
  {
    name: 'Additional Accuracy',
    type: GemType.Dex,
    level: 8,
  },
  {
    name: 'Lesser Multiple Projectiles',
    type: GemType.Dex,
    level: 8,
  },
  {
    name: 'Trap',
    type: GemType.Dex,
    level: 8,
  },
  {
    name: 'Void Manipulation',
    type: GemType.Dex,
    level: 8,
  },
  {
    name: 'Nightblade',
    type: GemType.Dex,
    level: 18,
  },
  {
    name: 'Block Chance Reduction',
    type: GemType.Dex,
    level: 18,
  },
  {
    name: 'Culling Strike',
    type: GemType.Dex,
    level: 18,
  },
  {
    name: 'Close Combat',
    type: GemType.Dex,
    level: 18,
  },
  {
    name: 'Deadly Ailments',
    type: GemType.Dex,
    level: 18,
  },
  {
    name: 'Point Blank',
    type: GemType.Dex,
    level: 18,
  },
  {
    name: 'Vicious Projectiles',
    type: GemType.Dex,
    level: 18,
  },
  {
    name: 'Trap and Mine Damage',
    type: GemType.Dex,
    level: 18,
  },
  {
    name: 'Mana Leech',
    type: GemType.Dex,
    level: 31,
  },
  {
    name: 'Cold Penetration',
    type: GemType.Dex,
    level: 31,
  },
  {
    name: 'Hypothermia',
    type: GemType.Dex,
    level: 31,
  },
  {
    name: 'Faster Projectiles',
    type: GemType.Dex,
    level: 31,
  },
  {
    name: 'Focused Ballista',
    type: GemType.Dex,
    level: 31,
  },
  {
    name: 'Fork',
    type: GemType.Dex,
    level: 31,
  },
  {
    name: 'Ice Bite',
    type: GemType.Dex,
    level: 31,
  },
  {
    name: 'Critical Strike Affliction',
    type: GemType.Dex,
    level: 31,
  },
  {
    name: 'Charged Traps',
    type: GemType.Dex,
    level: 31,
  },
  {
    name: 'Swift Affliction',
    type: GemType.Dex,
    level: 31,
  },
  {
    name: 'Second Wind',
    type: GemType.Dex,
    level: 31,
  },
  {
    name: 'Slower Projectiles',
    type: GemType.Dex,
    level: 31,
  },
  {
    name: 'Advanced Traps',
    type: GemType.Dex,
    level: 31,
  },
  {
    name: 'Impale',
    type: GemType.Dex,
    level: 31,
  },
  {
    name: 'Mark On Hit',
    type: GemType.Dex,
    level: 38,
  },
  {
    name: 'Cast On Critical Strike',
    type: GemType.Dex,
    level: 38,
  },
  {
    name: 'Cast on Death',
    type: GemType.Dex,
    level: 38,
  },
  {
    name: 'Cluster Traps',
    type: GemType.Dex,
    level: 38,
  },
  {
    name: 'Greater Multiple Projectiles',
    type: GemType.Dex,
    level: 38,
  },
  {
    name: 'Greater Volley',
    type: GemType.Dex,
    level: 38,
  },
  {
    name: 'Barrage',
    type: GemType.Dex,
    level: 38,
  },
  {
    name: 'Vile Toxins',
    type: GemType.Dex,
    level: 38,
  },
  {
    name: 'Withering Touch',
    type: GemType.Dex,
    level: 38,
  },
  {
    name: 'Chain',
    type: GemType.Dex,
    level: 38,
  },
  {
    name: 'Prismatic Burst',
    type: GemType.Int,
    level: 1,
  },
  {
    name: 'Arcane Surge',
    type: GemType.Int,
    level: 1,
  },
  {
    name: 'Elemental Proliferation',
    type: GemType.Int,
    level: 1,
  },
  {
    name: 'Enlighten',
    type: GemType.Int,
    level: 1,
  },
  {
    name: 'Infused Channelling',
    type: GemType.Int,
    level: 4,
  },
  {
    name: 'Summon Phantasm',
    type: GemType.Int,
    level: 4,
  },
  {
    name: 'Spell Cascade',
    type: GemType.Int,
    level: 4,
  },
  {
    name: 'Minion Damage',
    type: GemType.Int,
    level: 8,
  },
  {
    name: 'Added Lightning Damage',
    type: GemType.Int,
    level: 8,
  },
  {
    name: 'Combustion',
    type: GemType.Int,
    level: 8,
  },
  {
    name: 'Efficacy',
    type: GemType.Int,
    level: 8,
  },
  {
    name: 'Increased Critical Strikes',
    type: GemType.Int,
    level: 8,
  },
  {
    name: 'Infernal Legion',
    type: GemType.Int,
    level: 8,
  },
  {
    name: 'Blastchain Mine',
    type: GemType.Int,
    level: 8,
  },
  {
    name: 'Unbound Ailments',
    type: GemType.Int,
    level: 8,
  },
  {
    name: 'Predator',
    type: GemType.Int,
    level: 18,
  },
  {
    name: 'Minion Life',
    type: GemType.Int,
    level: 18,
  },
  {
    name: 'Minion Speed',
    type: GemType.Int,
    level: 18,
  },
  {
    name: 'Concentrated Effect',
    type: GemType.Int,
    level: 18,
  },
  {
    name: 'Controlled Destruction',
    type: GemType.Int,
    level: 18,
  },
  {
    name: 'Elemental Focus',
    type: GemType.Int,
    level: 18,
  },
  {
    name: 'Faster Casting',
    type: GemType.Int,
    level: 18,
  },
  {
    name: 'Increased Critical Damage',
    type: GemType.Int,
    level: 18,
  },
  {
    name: 'Overcharge',
    type: GemType.Int,
    level: 18,
  },
  {
    name: 'Physical to Lightning',
    type: GemType.Int,
    level: 18,
  },
  {
    name: 'Power Charge On Critical',
    type: GemType.Int,
    level: 18,
  },
  {
    name: 'Trinity',
    type: GemType.Int,
    level: 18,
  },
  {
    name: 'Cursed Ground',
    type: GemType.Int,
    level: 31,
  },
  {
    name: 'Archmage',
    type: GemType.Int,
    level: 31,
  },
  {
    name: 'Feeding Frenzy',
    type: GemType.Int,
    level: 31,
  },
  {
    name: 'Innervate',
    type: GemType.Int,
    level: 31,
  },
  {
    name: 'Blasphemy',
    type: GemType.Int,
    level: 31,
  },
  {
    name: 'Added Chaos Damage',
    type: GemType.Int,
    level: 31,
  },
  {
    name: 'High-Impact Mine',
    type: GemType.Int,
    level: 31,
  },
  {
    name: 'Meat Shield',
    type: GemType.Int,
    level: 31,
  },
  {
    name: 'Elemental Penetration',
    type: GemType.Int,
    level: 31,
  },
  {
    name: 'Energy Leech',
    type: GemType.Int,
    level: 31,
  },
  {
    name: 'Item Rarity',
    type: GemType.Int,
    level: 31,
  },
  {
    name: 'Charged Mines',
    type: GemType.Int,
    level: 31,
  },
  {
    name: 'Lightning Penetration',
    type: GemType.Int,
    level: 31,
  },
  {
    name: 'Pinpoint',
    type: GemType.Int,
    level: 31,
  },
  {
    name: 'Elemental Army',
    type: GemType.Int,
    level: 31,
  },
  {
    name: 'Swiftbrand',
    type: GemType.Int,
    level: 31,
  },
  {
    name: 'Intensify',
    type: GemType.Int,
    level: 31,
  },
  {
    name: 'Impending Doom',
    type: GemType.Int,
    level: 31,
  },
  {
    name: 'Hex Bloom',
    type: GemType.Int,
    level: 38,
  },
  {
    name: 'Minefield',
    type: GemType.Int,
    level: 38,
  },
  {
    name: 'Bonechill',
    type: GemType.Int,
    level: 38,
  },
  {
    name: 'Hextouch',
    type: GemType.Int,
    level: 38,
  },
  {
    name: 'Cast when Stunned',
    type: GemType.Int,
    level: 38,
  },
  {
    name: 'Cast while Channelling',
    type: GemType.Int,
    level: 38,
  },
  {
    name: 'Decay',
    type: GemType.Int,
    level: 38,
  },
  {
    name: 'Spell Echo',
    type: GemType.Int,
    level: 38,
  },
  {
    name: 'Ignite Proliferation',
    type: GemType.Int,
    level: 38,
  },
  {
    name: 'Immolate',
    type: GemType.Int,
    level: 38,
  },
  {
    name: 'Increased Area of Effect',
    type: GemType.Int,
    level: 38,
  },
  {
    name: 'Unleash',
    type: GemType.Int,
    level: 38,
  },
  {
    name: 'Controlled Blaze',
    type: GemType.Str,
    level: 1,
  },
  {
    name: 'Corrupting Cry',
    type: GemType.Str,
    level: 1,
  },
  {
    name: 'Flamewood',
    type: GemType.Str,
    level: 1,
  },
  {
    name: "Guardian's Blessing",
    type: GemType.Str,
    level: 1,
  },
  {
    name: 'Trauma',
    type: GemType.Str,
    level: 1,
  },
  {
    name: 'Volatility',
    type: GemType.Str,
    level: 1,
  },
  {
    name: 'Locus Mine',
    type: GemType.Dex,
    level: 1,
  },
  {
    name: 'Returning Projectiles',
    type: GemType.Dex,
    level: 1,
  },
  {
    name: 'Sadism',
    type: GemType.Dex,
    level: 1,
  },
  {
    name: 'Devour',
    type: GemType.Int,
    level: 1,
  },
  {
    name: 'Fresh Meat',
    type: GemType.Int,
    level: 1,
  },
  {
    name: 'Frigid Bond',
    type: GemType.Int,
    level: 1,
  },
  {
    name: 'Sacrifice',
    type: GemType.Int,
    level: 1,
  },
  {
    name: 'Spellblade',
    type: GemType.Int,
    level: 1,
  },
];
