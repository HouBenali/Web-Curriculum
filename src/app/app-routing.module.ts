import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component'
import { ResumeComponent } from './resume/resume.component'
import { ContactMeComponent } from './contact-me/contact-me.component'
import { KnowledgeComponent } from './knowledge/knowledge.component'
import { ExperienceComponent } from './experience/experience.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
    {path: '', component: ProfileComponent },
    {path: 'academic', component: ResumeComponent},
    {path: 'skills', component: KnowledgeComponent},
    {path:'experience', component: ExperienceComponent},
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
