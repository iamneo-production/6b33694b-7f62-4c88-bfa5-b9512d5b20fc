import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { UsersComponent } from './users/users.component';
import { DisplayuserComponent } from './admin/displayuser/displayuser.component';
import { RefreeComponent } from './admin/refree/refree.component';
import { TeamsComponent } from './admin/teams/teams.component';
import { VenueComponent } from './admin/venue/venue.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BookeventComponent } from './users/bookevent/bookevent.component';
import { HomepageComponent } from './users/homepage/homepage.component';
import { ViewEventComponent } from './users/view-event/view-event.component';
import { ViewbookedEventComponent } from './users/viewbooked-event/viewbooked-event.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    UsersComponent,
    DisplayuserComponent,
    RefreeComponent,
    TeamsComponent,
    VenueComponent,
    LoginComponent,
    SignupComponent,
    BookeventComponent,
    HomepageComponent,
    ViewEventComponent,
    ViewbookedEventComponent,
    EditUserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
