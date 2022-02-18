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
import { AddRefreeComponent } from './admin/refree/add-refree/add-refree.component';
import { DeleteRefreeComponent } from './admin/refree/delete-refree/delete-refree.component';
import { EditRefreeComponent } from './admin/refree/edit-refree/edit-refree.component';
import { AddTeamComponent } from './admin/teams/add-team/add-team.component';
import { DeleteTeamComponent } from './admin/teams/delete-team/delete-team.component';
import { EditTeamComponent } from './admin/teams/edit-team/edit-team.component';
import { AddVenueComponent } from './admin/venue/add-venue/add-venue.component';
import { DeleteVenueComponent } from './admin/venue/delete-venue/delete-venue.component';
import { EditVenueComponent } from './admin/venue/edit-venue/edit-venue.component';
import { ViewVenueComponent } from './admin/venue/view-venue/view-venue.component';
import { EditBookingComponent } from './users/bookevent/edit-booking/edit-booking.component';

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
    AddRefreeComponent,
    DeleteRefreeComponent,
    EditRefreeComponent,
    AddTeamComponent,
    DeleteTeamComponent,
    EditTeamComponent,
    AddVenueComponent,
    DeleteVenueComponent,
    EditVenueComponent,
    ViewVenueComponent,
    EditBookingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
