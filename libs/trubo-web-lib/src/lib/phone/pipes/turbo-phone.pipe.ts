import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'turboPhone',
})
export class TurboPhonePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
