import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort"
})
export class SortPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return args.sort(function(a, b) {
      return a - b;
    });
  }
}
