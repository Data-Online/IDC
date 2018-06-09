// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { FarmDataEndpoint } from './farm-data-endpoint.service';

import { OffTake } from '../models/offtake.model';

@Injectable()
export class FarmDataService
{
    constructor(
        private router: Router,
        private http: HttpClient,
        private farmDataEndpoint: FarmDataEndpoint) { }

    getOffTakes(page?: number, pageSize?: number)
    {
        return this.farmDataEndpoint.getOffTakesEndpoint<OffTake[]>(page, pageSize);
    }

}
