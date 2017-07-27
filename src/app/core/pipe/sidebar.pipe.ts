import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sidebar'
})
export class SidebarPipe implements PipeTransform {

  transform(items: any, args?: any): any {
    if (!items) {
      return items;
    }
    return items.filter(item => item.data.sidebar === true);
  }

}
