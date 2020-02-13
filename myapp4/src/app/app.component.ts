import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp4';
  myVar = "<h1>This is Heading</h1>"
  myVar1 = "javascript:alert('helllo')"
  trustedUrl;
  dangerousUrl = 'javascript:alert("Hi there")';

  constructor(private sanitizer:DomSanitizer){
    this.trustedUrl =  sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
  }

}
