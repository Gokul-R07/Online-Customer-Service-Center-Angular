import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/operator/components/operator-module/service/data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SolutionModuleComponent } from 'src/app/solution-module/solution-module.component';


interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-operator-module',
  templateUrl: './operator-module.component.html',
  styleUrls: ['./operator-module.component.css']
})
export class OperatorModuleComponent implements OnInit {

  id: number = 0;

  data!:[];
  operator!:any;
  operatorDetails: any;
  operatorId:any;
  response: any;
  cols!:Column[];
  lastSolution!:string;
  


  constructor(private dataService: DataService,private route: ActivatedRoute,private router: Router, private http:HttpClient) { 



    const storedId = sessionStorage.getItem('id');
    if (storedId) {
      this.id = parseInt(storedId, 10);
    }
   console.log("id",this.id)
}



  // logout and move to the login page again.
  logout(){
    localStorage.clear();
    this.router.navigate(['/home']);
  }

// navigation to the solution module.
  navToSolution(issueDescription:string,issueId:number){
    // this.router.navigate(['/solution',{description:issueDescription}]);
    
    this.router.navigate(['/solution'],{state:{description: issueDescription,Id: issueId,operatorId : localStorage.getItem('Id')}});
  }

  ngOnInit(): void {

    // this.data= this.operatorDetails.customerIssues;
    


// get all allocated issue by  id


this.http.get('http://localhost:8080/allocated-issue-by-id/'+this.id).subscribe(
  (response: any)=>{
    
    this.data = response;
    console.log(response);

    const solution = response.solutions;
    console.log(solution);
    localStorage.setItem('solutions',solution);
    console.log(localStorage.getItem('solutions'));
    
  },
  (error)=>{
    console.log('Error fetching allocated issue',error);
  }
)



// get all allocated issue 

// this.http.get('http://localhost:8080/Allocated-issue').subscribe(
//   (response:any)=>{
//     this.data = response;
//     console.log(response);
//   },
//   (error)=>{
//     console.error('Allocated issue error'+error);
//   }
// )


  // defining the columns 
  this.cols=[

    {field:"issueId",header:"Issue Id"},
    {field:"issueType",header:"Issue Type"},
    {field:"issueCreationDate",header:"Issue Creation Date"},
    {field:"issueUpdatedDate",header:"Issue Updated Date"},
    {field: "ticketClose",header: "Ticket Close"},
    {field: "issueStatus",header: "issueStatus"},
    {field:  "issueDescription",header:  "Issue Description"},
    
    
  ];
}

}
  



