import { Injectable } from '@angular/core';

export enum GemType {
  Int = 1,
  Dex = 2,
  Str = 3,
}

export interface Gem {
  type: GemType | null;
  name: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class GemDictService {
  gemDict = new Map<string, Gem>();

  constructor() {}
}
