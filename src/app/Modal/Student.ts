import { Department } from "./Department";

export class Student {
    studentId: string;
    fullName: string;
    mobile: number;
    deptId: string;
    deptName: string;
    course: string

    constructor(obj?: any){
        this.studentId = obj && obj.studentId || '';
        this.fullName = obj && obj.fullName || '';
        this.mobile = obj && obj.mobile || '';
        this.deptId = obj && obj.deptId || '';
        this.deptName = obj && obj.deptName || '';
        this.course = obj && obj.course || '';
    }

}