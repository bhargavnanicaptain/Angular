import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './Employee';  // Adjust the path as necessary

@Pipe({
  name: 'employee'
})
export class EmployeeDetailsPipe implements PipeTransform {
  transform(value: Employee[], order: 'asc' | 'dsc' = 'asc'): Employee[] {
    return [...value].sort((a, b) =>
      order === 'asc' ? a.empId - b.empId : b.empId - a.empId
    );
  }
}
