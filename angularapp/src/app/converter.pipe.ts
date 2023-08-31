import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {
  private currency = new Map<string, number>([
    ["USD", 1.126735],
    ["GBP", 0.876893],
    ["INR", 79.677056]
  ]);

  public transform(source: string, target: string, amount: number): number {
    if (!this.currency.has(source) || !this.currency.has(target)) {
      throw new Error('Invalid currency code');
    }

    return (this.currency.get(target)! / this.currency.get(source)!) * amount;
  }
}
