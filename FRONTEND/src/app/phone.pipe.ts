import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string | undefined): string {
    if (value === undefined) {
      return "";
    }
    return "+33 " + value.slice(1);
  }

}
