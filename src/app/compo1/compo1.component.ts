import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component {
  public sampleText: string = "";                     // Binding//  
  public PassageHeading: string = "";
  public link: any;
  // public ProjectName:string="ACKO Insurence";

  
  
  constructor(private route: Router) {

  }
  cardData: any = [
    {
      img:'../../assets/imges/img01.svg',
      title: 'Zero Depreciation Cover',     
      passage: "An insurer considers depreciation on car parts while calculating the claim amount But with a Zero Depreciation Cover you can get depreciation covered under your Comprehensive Car Insurance Policy."
    
    },

    {
      img:'../../assets/imges/img02.svg',
      title:'Roadside Assistance Cover',
      passage:'With Roadside Assistance add-on you get access to 24x7 emergency roadside assistance, including towing services during car breakdowns. Call us if you get stranded on the road due to breakdown and we will help you out.      '
    },

    {
      img:'../../assets/imges/img03.svg',
      title:'Key Replacement Cover',
      passage:'The Key Replacement Cover helps you cover the cost of repairing the cars key and lockset if damaged. The coverage extends to replacing the key and lock on the car in case of lost keys or theft attempts.      '

    },

    {
      img:'../../assets/imges/img04.svg',
      title:'Outstation Emergency Cover',
      passage:'Outstation Emergency Cover focuses on insuring you in case of accidents/breakdowns that occur beyond a 100 km radius of your residence. Get coupons if the car’s repair time exceeds 12 hours.      '
    },

    {
      img:'../../assets/imges/img05.svg',
      title:'Consumables Cover',
      passage:'The cost of items such as  gearbox oil, engine oil, nut and bolt, lubricants, etc are usually not covered during claim settlement. With Consumables Add-on, we will cover such costs while settling claims. We offer this add-on as a part of your Comprehensive Car Policy.'
    },

    {
      img:'../../assets/imges/img06.svg',
      title:'Engine Protection Cover',
      passage:'Usually, the cars engine is not covered under Comprehensive Coverage. With the Engine Protection add-on, you get coverage for the repair or replacement of the engine. This is as per the terms and conditions of the policy.'
      
    },

    {
      img:'../../assets/imges/img07.svg',
      title:'No Claim Bonus (NCB) Protection',
      passage:'NCB Protection add-on keeps the NCB discount intact even if you make a claim. With this add-on, you can raise a claim and still get a No Claim Bonus discount of up to 50% on car insurance renewals.'
    },

    {
      img:'../../assets/imges/img08.svg',
      title:'Return to Invoice Cover',
      passage:'Return to Invoice Cover is useful in case of theft or damage-beyond-repair claims. With this add-on, you can claim the complete amount as per the cars invoice value.      '
    },

    {
      img:'../../assets/imges/img09.svg',
      title:'Personal Accident Cover for Passengers',
      passage:'This add-on allows you to insure the passengers in your car in case of unfortunate accidents leading to permanent disability/death. It has a sum insured of up to Rs. 1 lakh/passenger.      '
    }

  ]
  
  cardData1=[

    {

      img1:'../../assets/imges/pic01.webp',
      title1:'Save Money  ',
      passage1:'With traditional insurance, a significant part of your premium can go towards commissions for third-party dealers or middlemen. Since we sell directly to you, the commission part of the premium is saved.      '


    },

    {
      img1:'../../assets/imges/pic02.webp',
      title1:'Save Time ',
      passage1:' Buying car insurance online from us saves a lot of your effort. You can access our services from anywhere, anytime, through our app/website. Just log in to your ACKO account and find all you need in a few clicks.      '


    },

    {
      img1:'../../assets/imges/pic03.webp',
      title1:'Save Effort',
      passage1:'Buying car insurance online from us saves a lot of your effort. You can access our services from anywhere, anytime, through our app/website. Just log in to your ACKO account and find all you need in a few clicks.      '


    },
    {
      img1:'../../assets/imges/pic04.webp',
      title1:'Highly-rated, go-to app',
      passage1:'Our app serves as a go-to place for anything related to car insurance. From purchase to claims, all can be done within a few clicks. It’s simple and clutter-free.      '
    },

    {
      img1:'../../assets/imges/pic05.webp',
      title1:'Instant discounts',
      passage1:" We have unique plans tailored to your needs. They are not available anywhere else. Buying or renewing your plan during special events can lead to higher discounts.      "
    },

    {
      img1:'../../assets/imges/pic06.webp',
      title1:'Strong 7.7 crore+ customer base',
      passage1:'We have an ever-increasing base of crores of customers all around the country. Not only motor insurance, but we provide multiple solutions for health, corporate, and microinsurance as well.      '
     },



  ]

  

  ngOnInit(): void {

    this.link = "https://www.acko.com/";

    // this.ProjectName="";    

  }

  clickEvent() {
    console.log("This is for Event binding");               // Binding//
  }

  goto(){
    this.link="manage"
  }

}




