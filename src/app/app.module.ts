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

@NgModule({
  declarations: [						
    AppComponent,
      HeaderComponent,
      FooterComponent,
      SideViewComponent,
      MainBodyComponent,
      ParentComponent,
      ChildrenComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
