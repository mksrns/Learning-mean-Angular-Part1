import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BijakService } from 'src/app/_services/bijak.service';

@Component({
  selector: 'app-bijak-template',
  templateUrl: './bijak-template.component.html',
  styleUrls: ['./bijak-template.component.css']
})
export class BijakTemplateComponent implements OnInit {
  bijakId:string;
  bijaks:any;
  items:any;
  bijakData: any;
  blank:boolean = false;
  count:number = 10;

  constructor(private route:ActivatedRoute, private bijakServ:BijakService) { }

  ngOnInit() {
    this.open();
  }

  getSingleBijak(bijakId){
    this.bijakServ.getSingle(bijakId).subscribe(
      (data:any) => {
        
        this.bijaks = data.bijak;
        this.items = this.bijaks.itemRows;
        if(this.count - this.items.length < 10){
          this.blank = true;
        } else {
          this.blank = false;
        }
      }
    );
  }

  open(){
    this.bijakServ.bijakData$.subscribe((data: any) => {
      this.bijakData = data;
      this.getSingleBijak(this.bijakData);
    });
  }
}
