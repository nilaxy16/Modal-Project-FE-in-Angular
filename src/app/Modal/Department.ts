export class Department {
    deptId: string;
    deptName: string;

    constructor(obj?: any){
        this.deptId = obj && obj.deptId || '';
        this.deptName = obj && obj.deptName || '';
    }
}