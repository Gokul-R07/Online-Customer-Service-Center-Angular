
import { Issue } from "./issue";

export interface Customer{
     name: string;
     email:string;
     password:string;
     city:string;
     phoneNumber:number;
     issueList:Issue[];
     customerId:number;
   
}