import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GridApi, ColumnApi, GridOptions, ColDef } from 'ag-grid-community';
import { LEADERS_ROW_DATA, MEMBERS_ROW_DATA } from 'src/app/@data/fallback.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  gridAPI: GridApi;
  columnAPI: ColumnApi;
  DEFAULT_COLUMN_DEF = {
    autoHeight: true,
    sortable: true,
    editable: false,
    resizable: true,
  };
  columnDefs: Array<ColDef> = [
    {
      headerName: 'S.No',
      field: 'sno',
      maxWidth: 200
    },
    {
      headerName: 'Name',
      field: 'name',
      minWidth: 200
    },
    {
      headerName: 'Designation',
      field: 'desn',
      minWidth: 200
    }
  ];
  rowData;

  membersGridAPI: GridApi;
  membersColumnAPI: ColumnApi;
  membersGridOptions: GridOptions = {
    pagination: true,
    paginationPageSize: 5,
  };
  membersColumnDefs: Array<ColDef> = [
    {
      headerName: 'S.No',
      field: 'SNo',
      maxWidth: 200
    },
    {
      headerName: 'Name',
      field: 'NAME',
      minWidth: 200
    },
    {
      headerName: 'Area',
      field: 'AREA',
      minWidth: 200
    }
  ];
  membersRowData;

  constructor(private http: HttpClient) { }

  async ngOnInit() {
    try {
      this.rowData = await this.http.get('https://firebasestorage.googleapis.com/v0/b/surattamilsangam-84683.appspot.com/o/About%2Fleaders.json?alt=media&token=0dbe0d58-7898-4121-881e-25c22c5147ff').toPromise();
      this.membersRowData = await this.http.get('https://firebasestorage.googleapis.com/v0/b/surattamilsangam-84683.appspot.com/o/About%2Fmembers.json?alt=media&token=0dbe0d58-7898-4121-881e-25c22c5147ff').toPromise();
    } catch(e) {
      console.log(e);
      this.rowData = LEADERS_ROW_DATA;
      this.membersRowData = MEMBERS_ROW_DATA;
    }
  }

  gridReady($event: any): void {
    this.gridAPI = $event.api;
    this.columnAPI = $event.columnAPI;
    setTimeout(() => {
      this.gridAPI.sizeColumnsToFit();
      this.gridAPI.resetRowHeights();
    }, 600);
    window.onresize = () => {
      this.gridAPI.sizeColumnsToFit();
    }
  }

  membersGridReady($event: any): void {
    this.membersGridAPI = $event.api;
    this.membersColumnAPI = $event.columnAPI;
    setTimeout(() => {
      this.membersGridAPI.sizeColumnsToFit();
      this.membersGridAPI.resetRowHeights();
    }, 500);
    window.onresize = () => {
      this.membersGridAPI.sizeColumnsToFit();
    }
  }

  filterMembersSearch($event: KeyboardEvent): void {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.membersGridAPI.setQuickFilter(filterValue);
  }

  filterSearch($event: KeyboardEvent): void {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.gridAPI.setQuickFilter(filterValue);
  }
}
