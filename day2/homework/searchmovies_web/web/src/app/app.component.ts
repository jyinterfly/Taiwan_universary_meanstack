import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import * as _ from 'underscore';
 

import { PagerService } from './services/Tools/index'

var queryparm = "";
 
@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})
 
export class AppComponent implements OnInit {
    constructor(private http: Http, private pagerService: PagerService) { }
 
    // array of all items to be paged
    private allItems: any;
    

    // pager object
    pager: any = {};
 
    // paged items
    pagedItems: any[];
 
    ngOnInit() {
        // get dummy data
        queryparm = '&q=par';
        this.http.get('http://127.0.0.1:3000/?page=1' + queryparm)
            .map((response: Response) => response.json())
            .subscribe(data => {
                // set items to json response


                this.allItems = data;
                // initialize to page 1
                this.setPage(1);
            });
    }
 
    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
         console.log('http://127.0.0.1:3000/?page=' + page + queryparm);
         this.http.get('http://127.0.0.1:3000/?page=' + page + queryparm)
            .map((response: Response) => response.json())
            .subscribe(data => {
                this.allItems = data;
                this.pager = this.pagerService.getPager(this.allItems.total_results, page,20);
                this.pagedItems = this.allItems.results;
            });

      
    }

    onQuery(query:string) {
        queryparm = "&q=" + query;
        this.setPage(1);
    }
}
