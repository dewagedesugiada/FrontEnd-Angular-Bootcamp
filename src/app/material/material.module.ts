import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from "@angular/material"

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatInputModule,
    Material.MatFormFieldModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    // Material.MatCheckboxModule,
    Material.MatButtonModule,
    Material.MatTableModule,
    Material.MatIconModule,
    Material.MatPaginatorModule,
    Material.MatSortModule,
    Material.MatDialogModule,
    Material.MatCardModule
  ],
  exports: [
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatInputModule,
    Material.MatFormFieldModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    // Material.MatCheckboxModule,
    Material.MatButtonModule,
    Material.MatTableModule,
    Material.MatIconModule,
    Material.MatPaginatorModule,
    Material.MatSortModule,
    Material.MatDialogModule,
    Material.MatCardModule

  ]
})
export class MaterialModule { }
