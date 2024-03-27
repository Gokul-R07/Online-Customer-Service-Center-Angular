import { getLocaleDateFormat, getLocaleDateTimeFormat } from "@angular/common";
import { IssueStatus } from "./issueStatus.enum";
import { Solution } from "./solution";

export class Issue{
<<<<<<< HEAD
    public issueType!: String;
    public issueCreationDate:Date = new Date();
    public issueUpdationdate!:Date;
=======
    public issueType: string="";
    public issueCreationDate:Date=new Date();
    public issueUpdationdate:Date=new Date("2024-03-19");
>>>>>>> ec69067f3c8320e5fba4a1a60643bc81b2d32b90
    public ticketclose:boolean=false;
    public issueStatus:IssueStatus=IssueStatus.PENDING;
    public issueDescription!:String;
    public issueId!:number;
    public solutions:Solution[]=[];
    
}