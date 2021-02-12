import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: 'notes',
  loadChildren: () => import('./notes/notes.module').then(m => m.NotesModule)
}, {
  path: '**',
  redirectTo: '/login'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
