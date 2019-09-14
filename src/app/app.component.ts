import { Component } from '@angular/core';
import { BijakService } from './_services/bijak.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mandi';
  posts: any;
  filterArray: any = [];
  data1: any;

  constructor(private bijakServ: BijakService){}

  ngOnInit(){
    //autocomplete
    $(function(){
      $('#mylist').change(function () {
        var x = document.getElementById("mylist").innerHTML;
    
        if (x == "firstname") {
            var availableTags = [
                "ActionScript",
                "AppleScript",
                "Asp",
                "BASIC",
                "C",
                "C++",
                "Clojure",
                "COBOL",
                "ColdFusion",
                "Erlang",
                "Fortran",
                "Groovy",
                "Haskell",
                "Java",
                "JavaScript",
                "Lisp",
                "Perl",
                "PHP",
                "Python",
                "Ruby",
                "Scala",
                "Scheme"];
            $("#tags").autocomplete({
                source: availableTags
            });
    
    
        } else if (x == "lastname") {
            var availableTags = [
                "ActionScript",
                "AppleScript",
                "Asp",
                "BASIC",
                "C",
                "C++",
                "Clojure",
                "COBOL",
                "ColdFusion",
                "Erlang",
                "Fortran",
                "Groovy",
                "Haskell",
                "Java",
                "JavaScript",
                "Lisp",
                "Perl",
                "PHP",
                "Python",
                "Ruby",
                "Scala",
                "Scheme"];
            $("#tags").autocomplete({
                source: availableTags
            });
        }
    });
    
    
    });
    //autocomplete ends
    this.filterArray['title'] = [];
    this.filterArray['body'] = [];
    // this.getposts();
  }
  getposts(){
    this.bijakServ.getAllPosts().subscribe((data: any) => {
      this.posts = data;
      // console.log(this.posts);
    });
  }
  addFilter(type, event:any){
    var i, item;
    var filter = event.target.value.toUpperCase();
    item = document.getElementsByClassName('item');
    // console.log(type);
    // console.log(filter);
    this.filterArray[type].push(filter);
    // console.log(type + ' => ' + this.filterArray[type][this.filterArray[type].length-1]);
    // this.filterArray[type].push(0);
    // console.log(this.filterArray[type].push(0));
    for(i=0;i<this.posts.length;i++){
      if(this.posts[i].title.toUpperCase().indexOf(this.filterArray[type][this.filterArray[type].length-1]) > -1){
        item[i].style.display = '';
      } else {
        item[i].style.display = 'none';
      }
    }
  } 
  /* filterTitle(event:any){
    var i, item;
    var filter = event.target.value.toUpperCase();
    item = document.getElementsByClassName('item');
    for(i=0;i<this.posts.length;i++){
      if(this.posts[i].title.toUpperCase().indexOf(filter) > -1){
        item[i].style.display = '';
      } else {
        item[i].style.display = 'none';
      }
    }
  }
  filterBody(event:any){
    var i, item;
    var filter = event.target.value.toUpperCase();
    item = document.getElementsByClassName('item');
    for(i=0;i<this.posts.length;i++){
      if(this.posts[i].body.toUpperCase().indexOf(filter) > -1){
        item[i].style.display = '';
      } else {
        item[i].style.display = 'none';
      }
    }
  } */
}
