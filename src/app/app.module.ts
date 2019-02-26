import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header.component';
import { SideBarComponent } from './layout/side-bar.component';
import { FooterComponent } from './layout/footer.component';
import { ListBacthComponent } from './bacth/list/list-bacth.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CreateBatchComponent } from './bacth/create/create-batch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { BootcampBacthComponent } from './shared/combo/bootcamp-bacth.component';
import { ComboStudiPeriodComponent } from './shared/combo/studi-period/combo-studi-period.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    ListBacthComponent,
    CreateBatchComponent,
    EditBatchComponent,
    ListTrainerComponent,
    CreateTrainerComponent,
    EditTrainerComponent,
    StudiPeriodListComponent,
    CreateStudiPeriodComponent,
    EditStudiPeriodComponent,
    ListStudiMaterialComponent,
    CreateStudiMaterialComponent,
    EditStudiMaterialComponent,
    PeriodListComponent,
    CreatePeriodComponent,
    EditPeriodComponent,
    BootcampBacthComponent,
    ComboStudiPeriodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CreateBatchComponent]
})
export class AppModule { }
