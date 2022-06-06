import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component'
import { ResumeComponent } from './resume/resume.component'
import { ContactMeComponent } from './contact-me/contact-me.component'
import { MyAppsComponent } from './my-apps/my-apps.component'
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
    {path: '', component: ProfileComponent },
    {path: 'resume', component: ResumeComponent},
    {path: 'myapps', component: MyAppsComponent},
    {path:'portfolio', component: PortfolioComponent},
    {path:'contact-me', component: ContactMeComponent},
    // Errror Path
    { path: '404', component: ErrorComponent },
    { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
