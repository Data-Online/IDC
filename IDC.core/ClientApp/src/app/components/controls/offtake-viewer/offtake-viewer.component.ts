import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar, MatDialog } from '@angular/material';

import { fadeInOut } from '../../../services/animations';
import { AlertService, DialogType, MessageSeverity } from '../../../services/alert.service';
import { AppTranslationService } from "../../../services/app-translation.service";

import { FarmDataService } from "../../../services/farm-data.service";
import { OffTake } from '../../../models/offtake.model';
import { Utilities } from '../../../services/utilities';

@Component({
    selector: 'offtake-viewer',
    templateUrl: './offtake-viewer.component.html',
    styleUrls: ['./offtake-viewer.component.scss'],
    animations: [fadeInOut]
})

export class OfftakeViewerComponent implements OnInit, AfterViewInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    displayedColumns = ['name'];
    loadingIndicator: boolean;
    dataSource: MatTableDataSource<OffTake>;
    sourceOffTake: OffTake;

    constructor(
        private alertService: AlertService,
        private farmDataService: FarmDataService,
    ) {
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource();
    }

    ngOnInit() {
        this.loadData();
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    public applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue;
    }

    private refresh() {
        // Causes the filter to refresh there by updating with recently added data.
        this.applyFilter(this.dataSource.filter);
    }

    private loadData() {
        this.alertService.startLoadingMessage();
        this.loadingIndicator = true;

        this.farmDataService.getOffTakes().subscribe(
            offtakes => this.onDataLoadSuccessful(offtakes),
            error => this.onDataLoadFailed(error)
        );
    }
    private onDataLoadSuccessful(offtakes: OffTake[]) {
        console.debug(offtakes[0].name);
        this.alertService.stopLoadingMessage();
        this.loadingIndicator = false;
        this.dataSource.data = offtakes;
    }

    private onDataLoadFailed(error: any) {
        this.alertService.stopLoadingMessage();
        this.loadingIndicator = false;

        this.alertService.showStickyMessage("Load Error", `Unable to retrieve offtakes from the server.\r\nErrors: "${Utilities.getHttpResponseMessage(error)}"`,
            MessageSeverity.error, error);
    }
}
