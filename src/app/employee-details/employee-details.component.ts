import { Component, OnInit } from '@angular/core';
import { Employee } from './Employee';  // Adjust the path as necessary

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  data: Employee[] = [
    new Employee(101, 'V.T. Bhargav', 'assets/Images/Bhargav.png', 3333),
    new Employee(102, 'K. Pawan Kalyan', 'assets/Images/Pawan-Kalyan.jpg', 2000000),
    new Employee(103, 'G. Mahesh Babu', 'assets/Images/Mahesh-Babu.jpg', 1000000),
    new Employee(104, 'Prabhas Raju', 'assets/Images/Prabhas.jpg', 18000000)
  ];

  sortedData: Employee[] = [];

  ngOnInit() {
    this.sortByEmpId('asc');  // Call sort function on component initialization
  }

  sortByEmpId(order: 'asc' | 'dsc') {
    this.sortedData = [...this.data].sort((a, b) => 
      order === 'asc' ? a.empId - b.empId : b.empId - a.empId
    );
  }
}
