import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { EditVenueComponent } from "./admin/venue/edit-venue/edit-venue.component";
import { VenueComponent } from "./admin/venue/venue.component";
import { ViewVenueComponent } from "./admin/venue/view-venue/view-venue.component";
import { AddVenueComponent } from "./admin/venue/add-venue/add-venue.component";

import { EditUserComponent } from "./admin/displayuser/edit-user/edit-user.component";
import { HomepageComponent } from "./users/homepage/homepage.component";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { RefreeComponent } from "./admin/refree/refree.component";
import { AddRefreeComponent } from "./admin/refree/add-refree/add-refree.component";
import { EditRefreeComponent } from "./admin/refree/edit-refree/edit-refree.component";
import { DeleteRefreeComponent } from "./admin/refree/delete-refree/delete-refree.component";
import { TeamsComponent } from "./admin/teams/teams.component";
import { EditTeamComponent } from "./admin/teams/edit-team/edit-team.component";
import { AddTeamComponent } from "./admin/teams/add-team/add-team.component";
import { DeleteTeamComponent } from "./admin/teams/delete-team/delete-team.component";
import { DisplayuserComponent } from "./admin/displayuser/displayuser.component";
import { UsersComponent } from "./users/users.component";
import { BookeventComponent } from "./users/bookevent/bookevent.component";
import { ViewbookedEventComponent } from "./users/viewbooked-event/viewbooked-event.component";
import { EditBookingComponent } from "./users/bookevent/edit-booking/edit-booking.component";
import { AdminGuard, AuthGuard, CustomerGaurd } from "./auth/auth.guard";
const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: 'full' },
    { path: "login", component: LoginComponent },
    { path: "signup", component: SignupComponent },

    {
        path: 'user', component: UsersComponent,
        children: [
            { path: 'homepage', component: HomepageComponent },
            { path: 'bookEvent', component: BookeventComponent },
            { path: 'viewbooking', component: ViewbookedEventComponent },
            { path: 'editbooking', component: EditBookingComponent },
            
        ],
        canActivateChild:[CustomerGaurd]
    },
    {
        path: "admin",
        component: AdminComponent,
        children: [
            { path: "display", component: DisplayuserComponent },
            { path: 'editUser', component: EditUserComponent },
            { path: 'view', component: ViewVenueComponent },
            { path: 'edit', component: EditVenueComponent },
            { path: 'addVenue', component: AddVenueComponent },
            { path: 'refree', component: RefreeComponent },
            { path: 'addRefree', component: AddRefreeComponent },
            { path: 'editRefree', component: EditRefreeComponent },
            { path: 'deleteRefree', component: DeleteRefreeComponent },
            { path: 'teams', component: TeamsComponent },
            { path: 'editTeam', component: EditTeamComponent },
            { path: 'addTeam', component: AddTeamComponent },
            { path: 'deleteTeam', component: DeleteTeamComponent }
        ],canActivate:[AuthGuard],canActivateChild:[AdminGuard]
    }]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
