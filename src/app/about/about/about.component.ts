import { Component, OnInit } from '@angular/core';
import { GridApi, ColumnApi, GridOptions, ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  gridAPI: GridApi;
  columnAPI: ColumnApi;
  gridOptions: GridOptions = {
    pagination: true,
    paginationPageSize: 10,
  };
  DEFAULT_COLUMN_DEF = {
    autoHeight: true,
    sortable: true,
    editable: false,
  };
  columnDefs: Array<ColDef> = [
    {
      headerName: 'S.No',
      field: 'sno',
      maxWidth: 100
    },
    {
      headerName: 'Name',
      field: 'name',
      minWidth: 200
    },
    {
      headerName: 'Designation',
      field: 'desn',
    },
    {
      headerName: 'Area',
      field: 'area',
    },
    {
      headerName: 'Member since',
      field: 'since',
    },
  ];
  rowData = [{
    sno: '1',
    name: 'Mr. S. Venkatraman',
    desn: 'CHAIRMAN',
    area: 'Surat',
    since: '2008',
  }, {
    sno: '2',
    name: 'Mr. V.R. Ilango',
    desn: 'PRESIDENT',
    area: 'Kribhco',
    since: '2013'
  }, {
    sno: 3,
    name: 'Mr. Ralph Sunil',
    desn: 'VICE PRESIDENT',
    area: 'Surat',
    since: '2014',
  }, {
    sno: 4,
    name: 'Mr. D. Mahesh',
    desn: 'GENERAL SECRETARY',
    area: 'Udhna',
    since: '2014',
  }, {
    sno: 5,
    name: 'Mrs. Vijaya Kannan',
    desn: 'JT. SECRETARY',
    area: 'Surat',
    since: '2014',
  }, {
    sno: 6,
    name: 'Mr. Gurusamy',
    desn: 'TREASURER',
    area: 'Surat',
    since: '2014',
  }];

  constructor() { }

  ngOnInit(): void {
  }

  gridReady($event: any): void {
    this.gridAPI = $event.api;
    this.columnAPI = $event.columnAPI;
    this.gridAPI.sizeColumnsToFit();
    this.gridAPI.resetRowHeights();
  }

  filterSearch($event: KeyboardEvent): void {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.gridAPI.setQuickFilter(filterValue);
  }
}
