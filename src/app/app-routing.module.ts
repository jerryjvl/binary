import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RiskListComponent } from './risk-list/risk-list.component';
import { RiskViewComponent } from './risk-view/risk-view.component';

const routes: Routes = [
  { path: 'risks', component: RiskListComponent },
  { path: 'risk/:asset', component: RiskViewComponent },
  { path: 'risk/:asset/:threat', component: RiskViewComponent },
  { path: 'risk/:asset/:threat/:type', component: RiskViewComponent },
  { path: 'risk/:asset/:threat/:type/:answers', component: RiskViewComponent },
  { path: '**', redirectTo: '/risks', pathMatch: 'full' }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
