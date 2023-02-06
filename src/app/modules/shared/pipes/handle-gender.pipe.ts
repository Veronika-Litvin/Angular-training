import { Pipe } from '@angular/core';
import type { PipeTransform } from '@angular/core';

@Pipe({
  name: 'handleGender',
})
export class HandleGengerPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'female' : 'male';
  }
  
}