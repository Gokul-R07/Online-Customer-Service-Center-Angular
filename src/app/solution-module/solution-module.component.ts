// solution.component.ts
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SolutionModuleServiceService } from './service/solution-module-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-solution-module',
  templateUrl: './solution-module.component.html',
  styleUrls: ['./solution-module.component.css']
})


export class SolutionModuleComponent implements OnInit {



// code to navigate back to the issue table module.
goBack() {
this.router.navigate(['/operator'],);
};



  formGroup!: FormGroup;
 
  issueId:any;
  operatorId:any;

  issueType = ["Software", "Hardware"];
  solutionText!: string;
  previousSolution:any;
  operatorDetails:any;
  issueDescription!: string;
  currentIssueDescription!:any;
  

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private toastr: ToastrService) {

    

    
      const navigation = this.router.getCurrentNavigation();
      console.log(navigation); // Log the navigation object
  
      if (navigation && navigation.extras.state) {
        
        console.log(navigation.extras.state); // Log the state object
        this.issueDescription = navigation.extras.state['description'];
        this.issueId = navigation.extras.state['Id'];
        this.operatorId = navigation.extras.state['operatorId'];
        console.log(this.issueDescription);
        console.log(this.issueId);
        console.log(this.operatorId);
        localStorage.setItem('description',this.issueDescription);
        localStorage.setItem('Id',this.issueId);
        localStorage.setItem('operatorId',this.operatorId);
      }
      
  }

  ngOnInit() {

    this.currentIssueDescription = localStorage.getItem('description');

    this.formGroup = new FormGroup({
      text: new FormControl<string | null>(null)
    });

    this.route.params.subscribe(params => {

      // code to get the issue description 
      this.issueDescription = params['description'];
      console.log(this.issueDescription);
     
    });

  
  }

  onSubmit() {

    // the request body to send the required value as text
    const requestBody = {
      
        "issueId": localStorage.getItem('Id'),
        "solutionDescription": this.solutionText,
        "operatorId": localStorage.getItem('operatorId')
      
    };


    // process of checking whether the text area contains just empty spaces or not.
    
    if (this.solutionText == "") {

      this.toastr.error('Solution cannot be empty!')
    } 
    
    // working with the post mapping 
    else {
      this.http.post(`http://localhost:8080/operator/solution`, requestBody,{responseType:'text'})
      .subscribe(
      
        (response):any  => {
          
          console.log('Solution submitted successfully');
          this.toastr.success('Solution submitted successfully');
          localStorage.setItem('solution',this.solutionText);
          this.solutionText="";
        },

        // handling the error of past mapping 
        err => {
          console.error('Failed to submit solution', err);
          this.toastr.error('Failed to submit solution');
        }
      );
    }

    // setting the time to show the toast and come back to the issue page 
    setTimeout(()=>{

      this.goBack(); 

    },1000); // 1 sec delay in this process.

    
    
  }


}
