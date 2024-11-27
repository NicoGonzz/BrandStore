import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: string): string {
    const specificDate = new Date('2024-12-24');
    const comparisonDate = value ? new Date(value) : new Date();

    if (isNaN(specificDate.getTime()) || isNaN(comparisonDate.getTime())) {
      return 'Fecha no válida';
    }
    return formatDistance(specificDate, comparisonDate, { addSuffix: true });
  }

}
