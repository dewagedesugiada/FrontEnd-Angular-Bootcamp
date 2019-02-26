import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBacthComponent } from './bacth/list/list-bacth.component';
import { CreateBatchComponent } from './bacth/create/create-batch.component';
import { EditBatchComponent } from './bacth/edit/edit-batch.component';
import { ListTrainerComponent } from './trainer/list-trainer.component';
import { CreateTrainerComponent } from './trainer/create/create-trainer.component';
import { EditTrainerComponent } from './trainer/edit/edit-trainer.component';
import { StudiPeriodListComponent } from './studi-period/list/studi-period-list.component';
import { CreateStudiPeriodComponent } from './studi-period/create/create-studi-period.component';
import { EditStudiPeriodComponent } from './studi-period/edit/edit-studi-period.component';
import { ListStudiMaterialComponent } from './studi-material/list/list-studi-material.component';
import { CreateStudiMaterialComponent } from './studi-material/create/create-studi-material.component';
import { EditStudiMaterialComponent } from './studi-material/edit/edit-studi-material.component';
import { PeriodListComponent } from './bootcamp-period/list/period-list.component';
import { CreatePeriodComponent } from './bootcamp-period/create/create-period.component';
import { EditPeriodComponent } from './bootcamp-period/edit/edit-period.component';

const routes: Routes = [
  {
    path: "list-batch",
    component: ListBacthComponent
  },
  {
    path: 'create-batch',
    component: CreateBatchComponent
  },
  {
    path: 'edit-batch/:batchId',
    component: EditBatchComponent
  }, {
    path: 'list-trainer',
    component: ListTrainerComponent
  }, {
    path: 'create-trainer',
    component: CreateTrainerComponent
  }, {
    path: 'edit-trainer/:trainerId',
    component: EditTrainerComponent
  }, {
    path: 'list-studi-period',
    component: StudiPeriodListComponent
  }, {
    path: 'create-studi-period',
    component: CreateStudiPeriodComponent
  }, {
    path: 'edit-studi-period/:weekId',
    component: EditStudiPeriodComponent
  }, {
    path: 'list-studi-material',
    component: ListStudiMaterialComponent
  }, {
    path: 'create-studi-material',
    component: CreateStudiMaterialComponent
  }, {
    path: 'edit-studi-material/:materialId',
    component: EditStudiMaterialComponent
  }, {
    path: 'list-period',
    component: PeriodListComponent
  }, {
    path: 'create-period',
    component: CreatePeriodComponent
  }, {
    path: 'edit-speriod/:bootcampPeriodId',
    component: EditPeriodComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
