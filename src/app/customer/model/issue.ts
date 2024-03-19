export class Issue{
    public issueType: string="";
    public issueCreationDate:Date=new Date("2024-03-19");
    public issueUpdationdate:Date=new Date("2024-03-19");
    public ticketclose:boolean=false;
    public issueStatus:string="pending";
    public issueDescription:string="";
    public issueId?:number | undefined;
    constructor(){
        
    } 
}