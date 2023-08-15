import { Component } from '@angular/core';
import {BaseClient} from "openid-client";
import {AuthService} from "./services/auth.service";
import {AppService} from "./services/app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cryptoApp';

 constructor ( public authService:AuthService,public  appService:AppService){
  }

  public doReq(){
   this.appService.doRequest().subscribe(e=>{
     console.log(e);
   })
  }


}
