import { Issue } from "./issue";

export class Customer{
    public name: string="";
    public email:string="";
    public password:string="";
    public city:string="";
    public phoneNumber:number | undefined;
    public issueList:Issue[]=new Array();
    public customerId?:number | undefined;
    constructor(){
        
    } 
}