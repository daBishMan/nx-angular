import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@nx-angular/api-interfaces';

@Component({
    selector: 'nx-angular-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    hello$ = this.http.get('/api/products');
    // xxx = this.http.get('/api/customers');
    constructor(private http: HttpClient) {}
}
