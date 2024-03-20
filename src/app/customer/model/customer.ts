
import { Issue } from "./issue";

export class Customer{
    public firstName?: string;
    public lastName?:string;
    public email:string="";
    public password:string="";
    public city:string="";
    public phoneNumber:number | undefined;
    public issueList:Issue[]=new Array();
    public customerId?:number | undefined;
   
}