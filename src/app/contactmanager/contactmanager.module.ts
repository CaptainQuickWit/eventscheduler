import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

const routes: Routes = [
  {
    path: '', component: ContactmanagerAppComponent,
    children: [
      {path:'', component: MainContentComponent}
    ]
  },
  { path: '**', redirectTo: 'contactmanager' }
];
@NgModule({
  declarations: [
    ContactmanagerAppComponent, MainContentComponent, SidenavComponent, ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactmanagerModule { }



