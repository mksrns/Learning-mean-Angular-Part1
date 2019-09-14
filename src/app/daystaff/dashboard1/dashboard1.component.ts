import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/_services/invoice.service';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements OnInit {

  constructor(private invoice:InvoiceService) { }

  ngOnInit() {
    
  }

}
