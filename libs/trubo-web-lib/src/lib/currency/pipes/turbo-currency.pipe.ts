import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'turboCurrency',
})
export class TurboCurrencyPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
