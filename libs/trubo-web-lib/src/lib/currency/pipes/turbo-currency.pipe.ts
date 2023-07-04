import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { TurboCurrencyModel } from '../turbo-currency-model';
import { turboCurrencyList } from '../turbo-currency-symbols';

@Pipe({
  name: 'turboCurrency',
})
export class TurboCurrencyPipe implements PipeTransform {
  transform(value: number, model: TurboCurrencyModel): string {
    let curr: string | undefined = value.toString();
    let identifier: string = '';
    let identifierPadding: string = '';
    console.log('model.locale=>', model.locale)
    curr = new CurrencyPipe(model.locale, model.currencyCode).transform(value) as string;
 

    if (!curr && model.identifier === 'symbol') {
      identifier = this.getSymbol(model);
      identifierPadding = model.identifierPadding ? ' ' : '';
      curr = model.identifierPosition === 'before' ? `${identifier}${identifierPadding}${curr}` : `${curr}${identifierPadding}${identifier}`;
    }
    return curr;
  }

  private getSymbol(model: TurboCurrencyModel): string {
    let curSymbol: string = '';
    let curSymbolModel = turboCurrencyList.find(item => item.countryName === model.countryName && item.isoCode === model.currencyCode);
    if (curSymbolModel && curSymbolModel.currencySymbol && curSymbolModel.currencySymbol !== 'none') {
      curSymbol = curSymbolModel.currencySymbol;
    }
    return curSymbol;
  }
}
