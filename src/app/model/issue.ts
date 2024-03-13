export class Issue{
    public issueType: string="";
    public issueCreationDate:Date=new Date();
    public issueUpdationdate:Date=new Date();
    public ticketclose:boolean=false;
    public issueStatus:string="";
    public issueDescription:string="";
    public issueId?:number;
    constructor(){
        
    } 
}