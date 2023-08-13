export interface Quest {
  id: number;
  actId: ActId;
  name: string;
}

export interface Act {
  id: ActId;
  name: string;
}

export enum ActId {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
}

export const acts: ReadonlyArray<Act> = [
  {
    id: ActId.One,
    name: 'Act 1',
  },
  {
    id: ActId.Two,
    name: 'Act 2',
  },
  {
    id: ActId.Three,
    name: 'Act 3',
  },
  {
    id: ActId.Four,
    name: 'Act 4',
  },
];

export const quests: ReadonlyArray<Quest> = [
  // ACT 1
  {
    id: 0,
    actId: ActId.One,
    name: 'Enemy At the Gate',
  },
  {
    id: 1,
    actId: ActId.One,
    name: 'Mercy Mission',
  },
  {
    id: 2,
    actId: ActId.One,
    name: 'Breaking Some Eggs',
  },
  {
    id: 3,
    actId: ActId.One,
    name: 'The Caged Brute',
  },
  {
    id: 4,
    actId: ActId.One,
    name: "The Siren's Cadence",
  },
  // ACT 2
  {
    id: 5,
    actId: ActId.Two,
    name: 'Intruders In Black',
  },
  {
    id: 6,
    actId: ActId.Two,
    name: 'Sharp and Cruel',
  },
  // ACT 3
  {
    id: 7,
    actId: ActId.Three,
    name: 'Lost in Love',
  },
  {
    id: 8,
    actId: ActId.Three,
    name: 'Sever the Right Hand',
  },
  {
    id: 9,
    actId: ActId.Three,
    name: 'Fixture of Fate',
  },
  // ACT 4
  {
    id: 10,
    actId: ActId.Four,
    name: 'Breaking the Seal',
  },
  {
    id: 11,
    actId: ActId.Four,
    name: 'The Eternal Nightmare',
  },
];
