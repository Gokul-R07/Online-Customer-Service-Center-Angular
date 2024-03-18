import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-operator-module',
  templateUrl: './operator-module.component.html',
  styleUrls: ['./operator-module.component.css']
})
export class OperatorModuleComponent implements OnInit {

  data: any;
  operator="yashwanth";
  constructor(private dataService: DataService) { }

  loading: boolean = false;

  load() {
      this.loading = true;

      setTimeout(() => {
          this.loading = false
      }, 2000);
  }

  ngOnInit(): void {
    // this.dataService.getData().subscribe((response: any) => {
    //   this.data = response;
    //   console.log(response);
    // });
    this.data=[
      {
        "Hardware - issue":"pending",
        
      },{
        "malware-attack":"completed",
      },
      {
        "Chip breakage":"completed",
      },
      {
        "virus check":"pending",
      }
    ]
  }
}
