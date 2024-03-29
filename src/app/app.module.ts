import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideViewComponent } from './side-view/side-view.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildrenComponent } from './children/children.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { DirectiveComponent } from './directive/directive.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { HomeComponent } from './home/home.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { XyzPipe } from './xyz.pipe';
import { MynamePipe } from './myname.pipe';
import { RandomComponent } from './random/random.component';

@NgModule({
  declarations: [															
    AppComponent,
      HeaderComponent,
      FooterComponent,
      SideViewComponent,
      MainBodyComponent,
      ParentComponent,
      ChildrenComponent,
      FirstComponent,
      SecondComponent,
      DirectiveComponent,
      ViewchildComponent,
      HomeComponent,
      HttpComponent,
      XyzPipe,
      MynamePipe,
      RandomComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
