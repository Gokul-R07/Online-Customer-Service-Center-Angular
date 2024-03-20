// solution.component.ts
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SolutionModuleServiceService } from '../solution-module-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-solution-module',
  templateUrl: './solution-module.component.html',
  styleUrls: ['./solution-module.component.css']
})
export class SolutionModuleComponent implements OnInit {
  formGroup!: FormGroup;
  issueDescription: string | undefined;
  issueId:number|undefined;

  issueType = ["Software", "Hardware"];
  solutionText!: string;

  constructor(private http: HttpClient, private solutionService: SolutionModuleServiceService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService) {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      text: new FormControl<string | null>(null)
    });

    this.route.params.subscribe(params => {
      this.issueDescription = params['description'];
      // this.issueId = params['Id'];
    });
  }

  onSubmit() {
    const requestBody = {
      issueId: 2 , // Replace with the actual issue Id
      solutionDescription: this.solutionText,
      operatorId: 1 // Replace with the actual operator Id
    };

    this.http.post('http://localhost:8080/operator/solution', requestBody)
      .subscribe(
        response => {
          console.log('Solution submitted successfully');
          this.toastr.success('Solution submitted successfully');
          // Optionally, navigate to another page or perform any additional actions upon successful submission
        },
        error => {
          console.error('Failed to submit solution', error);
          this.toastr.error('Failed to submit solution');
        }
      );
  }
}
