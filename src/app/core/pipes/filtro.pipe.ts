import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase().trim();

    return value.filter((data: any) => {
      return JSON.stringify(data).toLowerCase().includes(args);
    });
  }
}
