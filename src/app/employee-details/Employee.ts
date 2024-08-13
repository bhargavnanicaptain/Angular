export class Employee{
    empId:number;
    empName:String;
    empImage:String;
    empSal:number;
 
    constructor(empId:number,empName:String,empImage:String,empSal:number){
        this.empId=empId;
        this.empName=empName;
        this.empImage=empImage;
        this.empSal=empSal;
    }
}