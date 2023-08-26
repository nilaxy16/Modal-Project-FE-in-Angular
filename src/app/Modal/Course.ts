export class Course {
    courseId: string;
    courseName: string;
    deptId: string;
    deptName: string;

    constructor(obj?: any){
        this.courseId = obj && obj.courseId || '';
        this.courseName = obj && obj.courseName || '';
        this.deptId = obj && obj.deptId || '';
        this.deptName = obj && obj.deptName || '';
    }
}