import { Component } from '@angular/core';
interface pc {
	name: string ; 
	year: number ;
	flag: string ;  
}
 interface cart {
 	items : number; 
 	typeName : string[] ; 
 }
var cartImg:string ;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
cartImg = "https://cdn4.iconfinder.com/data/icons/shopping-21/64/shopping-06-512.png";
public pcList:pc[] = [
{name:"Mac" , year: 1982, flag:"https://www.freeiconspng.com/uploads/apple-mac-icon-5.png"},
{name:"Asus" , year: 2000,flag:"https://cdn2.iconfinder.com/data/icons/metro-uinvert-dock/256/Asus.png"},
{name:"Dell" , year: 1972, flag:"https://cdn.iconscout.com/icon/free/png-256/dell-4-569248.png"},
]; 

public cart:cart = {items:0 , typeName:[]};

buy(){
this.cart.items ++

}

add(namePC:string , yearPC: number ) {
  let pc:pc ; 
  pc.name = namePC;
  pc.year = yearPC;
  pc.flag = ""; 
  this.pcList.push(pc);
  console.log(pc);
}


  title = 'pcListHW';
}



