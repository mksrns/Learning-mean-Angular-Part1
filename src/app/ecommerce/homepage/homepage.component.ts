import { Component, OnInit } from '@angular/core';
import { EcommerceService } from 'src/app/_services/ecommerce.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
 electronics: boolean = false;
 appliances: boolean = false;
  menu:any = 
    {
      electronics: {
        title: "Electronics",
        url: "#",
        importantLinks: [ ],
          tabs: [
          {
          title: "Categories",
          columns: [
          [
            {
            title: "Mobiles",
            url: "/mobile-phones-store",
            type: "heading"
            },
            {
            title: "Mi",
            url: "/mobiles/mi~brand/pr?sid=tyy,4io"
            },
            {
            title: "Realme",
            url: "/mobiles/pr?sid=tyy%2C4io&p%5B%5D=facets.brand%255B%255D%3DRealme"
            },
            {
            title: "Samsung",
            url: "/samsung-mobile-store"
            }
          ],
          [
          {
          title: "Laptops",
          url: "/laptops-store",
          type: "heading"
          },
          {
          title: "Gaming Laptops",
          url: "/gaming-laptops-store?otracker=nmenu_sub_Electronics_0_Gaming%20Laptops"
          },
          {
          title: "Desktop PCs",
          url: "/desktop-pc-store",
          type: "heading"
          },
          {
          title: "Gaming & Accessories",
          url: "/gaming-store",
          type: "heading"
          },
          {
          title: "Computer Accessories",
          url: "/computer-accessories-store",
          type: "heading"
          },
          {
          title: "External Hard Disks",
          url: "/external-hard-disk-store"
          }],
          [
          {
          title: "Televisions",
          url: "/television-store"
          },
          {
          title: "Speakers",
          url: "/audio-speaker-store",
          type: "heading"
          },
          {
          title: "Home Audio Speakers",
          url: "/audio-video/speakers/pr?count=40&otracker=categorytree&p%5B%5D=facets.type%255B%255D%3DHome%2BAudio%2BSpeaker&p%5B%5D=facets.type%255B%255D%3DLaptop%252FDesktop%2BSpeaker&p%5B%5D=facets.type%255B%255D%3DSoundbar&sid=0pm%2F0o7"
          },
          {
          title: "Home Theatres",
          url: "/home-entertainment/video-players-accessories/home-theaters/pr?sid=ckf%2Csee%2Cmi3"
          },
          {
          title: "Soundbars",
          url: "/audio-video/speakers/pr?sid=0pm%2C0o7&p%5B%5D=facets.type%255B%255D%3DSoundbar&otracker=categorytree&p%5B%5D=facets.serviceability%5B%5D%3Dtrue&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured"
          },
          {
          title: "Bluetooth Speakers",
          url: "/audio-video/speakers/pr?sid=0pm%2C0o7&otracker=categorytree&p%5B%5D=facets.features%255B%255D%3DBluetooth"
          }],
          [
          {
          title: "Featured",
          url: "",
          type: "heading"
          },
          {
          title: "Laptops on Buyback Guarantee",
          url: "/laptops/~buyback-guarantee-on-laptops-/pr?sid=6bo%2Cb5g"
          },
          {
          title: "Flipkart SmartBuy",
          url: "/flipkart-smartbuy-store"
          },
          {
          title: "Li-Polymer Power Banks",
          url: "/lithium-polymer-power-banks-store"
          },
          {
          title: "Sony PS4 Pro & Slim",
          url: "/games/~sony-play-station/pr?facets.availability=Exclude%20Out%20of%20Stock&sid=4rr%2Ctg9&p%5B%5D=facets.filter_standard%255B%255D%3D1&facets.availability[]=Exclude+Out+of+Stock"
          },
          {
          title: "Apple Products",
          url: "/apple-products-store"
          }],
          [
          {
          title: "Featured",
          url: "",
          type: "heading"
          },
          {
          title: "Laptops on Buyback Guarantee",
          url: "/laptops/~buyback-guarantee-on-laptops-/pr?sid=6bo%2Cb5g"
          },
          {
          title: "Flipkart SmartBuy",
          url: "/flipkart-smartbuy-store"
          },
          {
          title: "Li-Polymer Power Banks",
          url: "/lithium-polymer-power-banks-store"
          },
          {
          title: "Sony PS4 Pro & Slim",
          url: "/games/~sony-play-station/pr?facets.availability=Exclude%20Out%20of%20Stock&sid=4rr%2Ctg9&p%5B%5D=facets.filter_standard%255B%255D%3D1&facets.availability[]=Exclude+Out+of+Stock"
          },
          {
          title: "Apple Products",
          url: "/apple-products-store"
          }]]
        }
        ]
        },
      appliances: {
        title: "TVs & Appliances",
        url: "#",
        importantLinks: [ ],
        tabs: [
        {
        title: "Categories",
        columns: [
        [
        {
        title: "Television",
        url: "/television-store?otracker=nmenu_sub_TVs%20and%20Appliances_0_Televisions",
        type: "heading"
        },
        {
        title: "Android TVs",
        url: "/televisions/pr?sid=ckf%2Cczl&otracker=categorytree&p%5B%5D=facets.operating_system%255B%255D%3DOfficial%2BAndroid&p%5B%5D=facets.operating_system%255B%255D%3DAndroid&p%5B%5D=facets.serviceability%5B%5D%3Dtrue",
        type: "heading"
        },
        {
        title: "Smart & Ultra HD",
        url: "/search?count=40&otracker=CLP_filters&p%5B%5D=facets.smart_tv%255B%255D%3DYes&p%5B%5D=facets.resolution%255B%255D%3DUltra%2BHD%2B%25284K%2529&sid=ckf%2Fczl&otracker=nmenu_sub_TVs%20and%20Appliances_0_Smart%20and%20Ultra%20HD",
        type: "heading"
        }
      ]]}]}
    };

  constructor(private ecommerserceServ: EcommerceService) { }

  ngOnInit() {
    this.getCategory();
    console.log(this.menu);
    this.electronics = true;
  }
  getCategory(){
    // this.ecommerserceServ.getAllCat().subscribe((data:any) =>{
    //   console.log(data);
    // });
  }
  subCat(event){
    console.log("hi" + event.target.value.toLowerCase().trim());
    if(event.target.value.toLowerCase() == "electronics"){
      this.electronics = true;
      this.appliances = false;
    }
    if(event.target.value.toLowerCase().search("appliance") > -1){
      this.appliances = true;
      this.electronics = false;
    }
  }

}
