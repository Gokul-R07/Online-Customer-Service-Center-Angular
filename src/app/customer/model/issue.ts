export class Issue{
    public issueType: string="";
    public issueCreationDate:Date=new Date("2024-06-23");
    public issueUpdationdate:Date=new Date("2024-06-23");
    public ticketclose:boolean=false;
    public issueStatus:string="unsolved";
    public issueDescription:string="";
    public issueId?:number | undefined;
    constructor(){
        
    } 
}