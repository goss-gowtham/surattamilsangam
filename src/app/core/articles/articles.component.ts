import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid-community';
import { AATHICHUDI, PROFESSIONS } from '../../@data/fallback.data';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  gridAPI: GridApi;
  columnAPI: ColumnApi;
  professionsGridAPI: GridApi;
  professionsColumnAPI: ColumnApi;
  DEFAULT_COLUMN_DEF = {
    autoHeight: true,
    sortable: true,
    editable: false,
    resizable: true,
  };
  gridOptions: GridOptions = {
    pagination: true,
    paginationPageSize: 10,
  };
  columnDefs: Array<ColDef> = [
    {
      headerName: 'Letter',
      field: 'letter',
      maxWidth: 200
    }, {
      headerName: 'Abbreviation',
      field: 'abbreviation',
      minWidth: 200,
    }, {
      headerName: 'Translation',
      field: 'translation',
      minWidth: 200
    }
  ];
  rowData = AATHICHUDI;

  professionsGridOptions: GridOptions = {
    pagination: true,
    paginationPageSize: 10,
  };
  professionsColumnDefs: Array<ColDef> = [
    {
      headerName: 'S.No',
      field: 'sno',
      maxWidth: 200
    }, {
      headerName: 'Profession',
      field: 'profession',
      minWidth: 200,
    }, {
      headerName: 'Tamil Name',
      field: 'tamil_name',
      minWidth: 200
    }
  ];
  professionsRowData = PROFESSIONS;

  articles;

  constructor(private http: HttpClient) { }

  async ngOnInit() {
    this.articles = await this.http.get('https://firebasestorage.googleapis.com/v0/b/surattamilsangam-84683.appspot.com/o/Data%2Farticles.json?alt=media').toPromise();
  }

  gridReady($event: any): void {
    this.gridAPI = $event.api;
    this.columnAPI = $event.columnAPI;
    setTimeout(() => {
      this.gridAPI.sizeColumnsToFit();
      this.gridAPI.resetRowHeights();
    }, 300);
    window.onresize = () => {
      this.gridAPI.sizeColumnsToFit();
    }
  }

  professionsGridReady($event: any): void {
    this.professionsGridAPI = $event.api;
    this.professionsColumnAPI = $event.columnAPI;
    setTimeout(() => {
      this.professionsGridAPI.sizeColumnsToFit();
      this.professionsGridAPI.resetRowHeights();
    }, 300);
    window.onresize = () => {
      this.professionsGridAPI.sizeColumnsToFit();
    }
  }

}
