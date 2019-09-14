import { Component, OnInit } from '@angular/core';
import { BijakService } from 'src/app/_services/bijak.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bijaks',
  templateUrl: './bijaks.component.html',
  styleUrls: ['./bijaks.component.css']
})
export class BijaksComponent implements OnInit {
  bijakData:any = [];
  page:number = 1;
  pages:Array<number>;

  constructor(private router: Router, private bijakServ: BijakService) { 
    
  }

  ngOnInit() {
    this.getBijak();
  }
  setPage(i, event:any){
    event.preventDefault();
    this.page = i+1;
    this.getBijak();
  }
  getBijak(){
    this.bijakServ.getAll(this.page).subscribe((data: any) => {
      this.bijakData = data.bijak;
      this.pages = new Array(data.pages);
      console.log(this.bijakData);
      console.log(this.pages);
    });
  }
  singleData(bijakId){
    this.bijakServ.sendBijakData(bijakId);
  }

}
