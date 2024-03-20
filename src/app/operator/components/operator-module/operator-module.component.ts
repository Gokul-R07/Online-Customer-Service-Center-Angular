import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/data.service';
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

  data!:[];
  operator!:any;
  operatorDetails: any;
  response: any;
  cols!:Column[];
  constructor(private dataService: DataService,private route: ActivatedRoute,private router: Router) { }

  loading: boolean = false;

  logout(){
    localStorage.clear();
    this.router.navigate(['/home']);
  }

  load() {
      this.loading = true;

      setTimeout(() => {
          this.loading = false
      }, 2000);

      
  }

  navToSolution(issueDescription:string,){
    this.router.navigate(['/solution',{description:issueDescription}]);
  }

  ngOnInit(): void {
    
    this.dataService.getData().subscribe((response: any) => {
      this.data = response;
      console.log(response);
    });
       
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {

      this.operatorDetails = navigation.extras.state['activeOperatorDetails'];
      console.log('Operator Details:', this.operatorDetails);
      this.operator = this.operatorDetails;

    }
  
  this.cols=[

    {field:"issueId",header:"Issue Id"},
    {field:"issueType",header:"Issue Type"},
    {field:"issueCreationDate",header:"Issue Creation Date"},
    {field:"issueUpdatedDate",header:"Issue Updated Date"},
    {field: "ticketClose",header: "Ticket Close"},
    {field: "issueStatus",header: "issueStatus"},
    {field:  "issueDescription",header:  "Issue Description"},
    // {field:"Actions",header:"Actions"},
    
  ];
}

}
