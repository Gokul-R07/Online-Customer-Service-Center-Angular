import { Issue } from "./issue";

export interface Operator {
    firstName:string;
    lastName:string;
    email: string,
    password: string,
    departmentName:string,
    phoneNumber:string,
    city:string,
    customerIssues:Issue[]    
  }
  