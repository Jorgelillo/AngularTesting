import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe01'
})
export class Pipe01Pipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
