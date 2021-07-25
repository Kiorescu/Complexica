import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'secondsDate'})
export class SecondsDatePipe implements PipeTransform{
  transform(value: number) {
   return new Date(1970, 0, 1).setSeconds(value);
  }
}
