import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { SuperAdminService } from '../../_services/superAdmin/super-admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      share() 
    );

  constructor(private superAminServ:SuperAdminService, private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
  }

  logout(){
    this.superAminServ.logout();
  }
} 
