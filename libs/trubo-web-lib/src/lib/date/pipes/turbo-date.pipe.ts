import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'turboDate',
})
export class TurboDatePipe implements PipeTransform {
  transform(value: Date | string, format: string = 'yyyy-MM-dd', locale: string = 'en-US'): string | null {
    value = new Date(value);
    return new DatePipe(locale).transform(value, format);
  }
}
