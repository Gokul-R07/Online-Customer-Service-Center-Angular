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
goBack() {
this.router.navigate(['/operator']);
};
  formGroup!: FormGroup;
  issueDescription: string | undefined;
  issueId:number|undefined;

  issueType = ["Software", "Hardware"];
  solutionText!: string;
  previousSolution = "No previous solution provided";

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private toastr: ToastrService) {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      text: new FormControl<string | null>(null)
    });

    this.route.params.subscribe(params => {
      this.issueDescription = params['description'];
     
    });
  }

  onSubmit() {
    const requestBody = {
      
        "issueId": 1,
        "solutionDescription": this.solutionText,
        "operatorId": 1
      
    };

    
    if (this.solutionText == "") {
      this.toastr.error('Solution cannot be empty!')
    } else {
      this.http.post(`http://localhost:8080/operator/solution`, requestBody,{responseType:'text'})
      .subscribe(
      
        (response):any  => {
          
          console.log('Solution submitted successfully');
          this.toastr.success('Solution submitted successfully');
          this.solutionText="";
        },
        err => {
          console.error('Failed to submit solution', err);
          this.toastr.error('Failed to submit solution');
        }
      );
    }
    this.goBack();
  }
}
