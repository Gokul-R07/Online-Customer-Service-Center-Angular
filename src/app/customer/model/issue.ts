import { getLocaleDateFormat, getLocaleDateTimeFormat } from "@angular/common";

export class Issue{
    public issueType?: string;
    public issueCreationDate?:Date = new Date();
    public issueUpdationdate?:Date;
    public ticketclose:boolean=false;
    public issueStatus:string="unsolved";
    public issueDescription?:string;
    public issueId?:number | undefined;
    constructor(){
        
    } 
}