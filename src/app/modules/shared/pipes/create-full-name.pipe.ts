import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../../user/models/user.interface';

@Pipe({
  name: 'createFullName'
})
export class CreateFullNamePipe implements PipeTransform {

  transform(value: IUser): string {
    return `${value.firstName}, ${value.lastName}`;
  }

}