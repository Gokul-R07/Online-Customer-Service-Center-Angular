import { getLocaleDateFormat, getLocaleDateTimeFormat } from "@angular/common";
import { IssueStatus } from "./issueStatus.enum";
import { Solution } from "./solution";

export class Issue{
    public issueType!: String;
    public issueCreationDate:Date = new Date();
    public issueUpdationdate!:Date;
    public ticketclose:boolean=false;
    public issueStatus:IssueStatus=IssueStatus.PENDING;
    public issueDescription!:String;
    public issueId!:number;
    public solutions:Solution[]=[];
    constructor(){
        
    } 
}