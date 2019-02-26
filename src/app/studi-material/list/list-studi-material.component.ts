import { Component, OnInit, ViewChild } from '@angular/core';
import { StudiMaterialService } from '../studi-material.service';
import { StudiMaterial } from './studMaterial';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ActiveFlag } from 'src/app/shared/enum';

@Component({
  selector: 'app-list-studi-material',
  templateUrl: './list-studi-material.component.html',
  styleUrls: ['./list-studi-material.component.css']
})
export class ListStudiMaterialComponent implements OnInit {

  studiMaterial: StudiMaterial[] = [];
  list: MatTableDataSource<any>;
  displayedColumns: String[] = ['description', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: String;
  constructor(private service: StudiMaterialService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.service.getStudiMaterials().subscribe(res => {
      Object.assign(this.studiMaterial, res['values']);
      this.list = new MatTableDataSource(this.studiMaterial);
      this.list.sort = this.sort;
      this.list.paginator = this.paginator;
    }, err => {
      console.log(JSON.stringify(err));
    })
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.list.filter = this.searchKey.trim().toLowerCase();
  }

  onDelete(materialId) {
    if (confirm("Are you sure you want to delete this data ? ")) {
      let studi: StudiMaterial = new StudiMaterial();
      studi.materialId = materialId;
      studi.activeFlag = ActiveFlag.Inactive;
      this.service.updateStudiMaterial(studi).subscribe(res => {
        location.reload();
      }, err => {
        alert("Delete Failed !!!");
      })
    }
  }

}
