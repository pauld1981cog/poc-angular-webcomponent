import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'turboPhone',
})
export class TurboPhonePipe implements PipeTransform {
  transform(value: string | number, format: string = '(000) 000-0000'): string {
    let phValue: string = value.toString();

    if (format == '(000) 000-0000') {
      const slice1 = phValue.slice(0,3);
      const slice2 = phValue.slice(3,6);
      const slice3 = phValue.slice(6);
  
      phValue =  `(${slice1}) ${slice2}-${slice3}`;
    }
    
    return phValue;
  }
}
