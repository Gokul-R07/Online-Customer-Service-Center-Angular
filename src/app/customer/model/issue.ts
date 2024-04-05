import { getLocaleDateFormat, getLocaleDateTimeFormat } from "@angular/common";
import { IssueStatus } from "./issueStatus.enum";
import { Solution } from "./solution";

export class Issue{
    public issueType: string="";
    public issueCreationDate:Date=new Date();
    public issueUpdationdate:Date=new Date("2024-03-19");
    public ticketClose:boolean=false;
    public issueStatus:IssueStatus=IssueStatus.PENDING;
    public issueDescription!:String;
    public issueId!:number;
    public solutions:Solution[]=[];
    
}