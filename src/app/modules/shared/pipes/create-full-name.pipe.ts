import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createFullName'
})
export class CreateFullNamePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string {
    return `${value.firstName}, ${value.lastName}`;
  }

}