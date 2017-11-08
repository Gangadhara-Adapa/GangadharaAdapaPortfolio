import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  constructor() { }

  
   
  

  ngOnInit() {

    $('.SendEmail').click(function (event) {
      var email = 'adapa@adapagangadhara.com';
      var subject = 'Project request';
      var emailBody = 'Your Project description and your contact details go here';
      document.location.href = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
    });
  }

}
