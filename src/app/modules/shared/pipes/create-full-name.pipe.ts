import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createFullName'
})
export class CreateFullNamePipe implements PipeTransform {

  transform(firstName: string, lastName: string): string {
    return `${firstName}, ${lastName}`;
  }

}