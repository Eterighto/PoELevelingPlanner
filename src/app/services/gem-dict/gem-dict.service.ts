import { Injectable } from '@angular/core';
import { Gem, gems } from 'src/data/gems';

@Injectable({
  providedIn: 'root',
})
export class GemDictService {
  readonly gemDict = new Map<string, Gem>();
  readonly gemsList!: Gem[];

  constructor() {
    gems.forEach((gemData: Gem) => this.gemDict.set(gemData.name, gemData));
    this.gemsList = [...this.gemDict.values()];
  }
}
