import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/data.service';
import { BootstrapOptions } from '@angular/core';

@Component({
  selector: 'app-operator-module',
  templateUrl: './operator-module.component.html',
  styleUrls: ['./operator-module.component.css']
})
export class OperatorModuleComponent implements OnInit {

  data: any;
  operator="yashwanth";
  constructor(private dataService: DataService) { }

  


  ngOnInit(): void {
    // this.dataService.getData().subscribe((response: any) => {
    //   this.data = response;
    //   console.log(response);
    // });
   
  }
}
