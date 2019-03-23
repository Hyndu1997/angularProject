import { customDirective } from './custom.directive';``
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { courseComponent } from './courses.components';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import{RouterModule, Routes} from '@angular/router';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { courses1Component } from 'src/courses1.component';
import { Home1Component } from './home1/home1.component';
import { Login1Component } from './login1/login1.component';
import { Header1Component } from './header1/header1.component';
import { Register1Component } from './register1/register1.component';
import { About1Component } from './about1/about1.component';
import { Contact1Component } from './contact1/contact1.component';
import { Pagenotfound1Component } from './pagenotfound1/pagenotfound1.component';
import{HttpClientModule}from'@angular/common/http';
import { customPipe } from './custom.pipe';
import { ChildComponent } from './child/child.component';
const Router:Routes=[
     //{path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent},
      {path:'about',component:AboutComponent},
      {path:'contact',component:ContactComponent},
      {path:'header',component:HeaderComponent},
      {path:'login1',component:Login1Component},
      {path:'register1',component:Register1Component},
      {path:'about1',component:About1Component},
      {path:'header1',component:Header1Component},
      {path:'contact1',component:Contact1Component},
      {path:'**',component:Pagenotfound1Component}
      
      
]

@NgModule({
  declarations: [
    AppComponent,
    courseComponent,
    HomeComponent,
    //LoginComponent,
    RegisterComponent,
    AboutComponent,
    HeaderComponent,
    ContactComponent,     
    PagenotfoundComponent,
    customDirective,
    courses1Component,
    Home1Component,
    Login1Component,
    Header1Component,
    Register1Component,
    About1Component,
    Contact1Component,
    customPipe,
    Pagenotfound1Component,
    ChildComponent,
    

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Router),
       FormsModule,
       ReactiveFormsModule,
       HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
