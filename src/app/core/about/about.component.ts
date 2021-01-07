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
  diffYear = new Date().getFullYear() - 1970;
  gridAPI: GridApi;
  columnAPI: ColumnApi;
  gridOptions: GridOptions = {
    pagination: true,
    paginationPageSize: 14,
  };
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
      minWidth: 200,
      cellStyle: {'text-transform': 'capitalize'}
    },
    {
      headerName: 'Designation',
      field: 'desn',
      minWidth: 200,
      cellStyle: {'text-transform': 'capitalize'}
    },
    {
      headerName: 'Phone',
      field: 'phone',
      minWidth: 150,
      cellRenderer: (params) => {
        console.log(params);
        let keyData = params.data.phone;
        let newLink =
        `<a href= https://ctrlq.org/call/${keyData}
        target="_blank">${keyData}</a>`;
        return newLink;
      }
    }
  ];
  rowData;

  membersGridAPI: GridApi;
  membersColumnAPI: ColumnApi;
  membersGridOptions: GridOptions = {
    pagination: true,
    paginationPageSize: 10,
  };
  membersColumnDefs: Array<ColDef> = [
    {
      headerName: 'S.No',
      field: 'sno',
      maxWidth: 200
    },
    {
      headerName: 'Name',
      field: 'name',
      minWidth: 200,
      cellStyle: {'text-transform': 'capitalize'}
    },
    {
      headerName: 'Area',
      field: 'area',
      minWidth: 200
    }
  ];
  membersRowData;

  constructor(private http: HttpClient) { }

  async ngOnInit() {
    try {
      this.rowData = await this.http.get('https://firebasestorage.googleapis.com/v0/b/surattamilsangam-84683.appspot.com/o/Data%2Fleaders.json?alt=media').toPromise();
      this.membersRowData = await this.http.get('https://firebasestorage.googleapis.com/v0/b/surattamilsangam-84683.appspot.com/o/Data%2Fmembers.json?alt=media').toPromise();
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
    }, 300);
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
    }, 300);
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
