import { Injectable, OnInit } from '@angular/core';
import {
  Headers,
  Http,
  Response,
  RequestOptions
} from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable()
export class ApiService implements OnInit {

  public headers: Headers = new Headers({});

  protected apiUrl = 'https://progress-board-server.herokuapp.com/api/';
  protected prefix = 'v1';
  protected endpoint: string = this.apiUrl + this.prefix;

  constructor(
    public http: Http
  ) {}

  public ngOnInit() {
    this.headers = new Headers({
      'Accept': 'application/json',
      'Content-type': 'application/json'
    });
  }

  public getCurrentUser() {
    const userString: string = localStorage.getItem('currentUser');
    return typeof userString === 'string' ? JSON.parse(userString) : {};
  }

  public get(path: string): Observable<any> {
    return this.http.get(`${this.endpoint}${path}`, this.getDefaultOptions())
      .pipe(map(this.checkForError))
      .pipe(catchError(this.catchErr))
      .pipe(map(this.getJson));
  }

  public post(path: string, body: any, options?: any): Observable<any> {
    return this.http.post(
      `${this.endpoint}${path}`,
      body,
      this.getDefaultOptions(options)
    )
      .pipe(map(this.checkForError))
      .pipe(catchError(this.catchErr))
      .pipe(map(this.getJson));
  }

  public put(path: string, body: any): Observable<any> {
    return this.http.put(
      `${this.endpoint}${path}`,
      JSON.stringify(body),
      this.getDefaultOptions()
    )
      .pipe(map(this.checkForError))
      .pipe(catchError(this.catchErr))
      .pipe(map(this.getJson));
  }

  public delete(path: string): Observable<any> {
    return this.http.delete(`${this.endpoint}${path}`, this.getDefaultOptions())
      .pipe(map(this.checkForError))
      .pipe(catchError(this.catchErr))
      .pipe(map(this.getJson));
  }
  public setHeaders(headers) {
    Object.keys(headers)
      .forEach((header: any) => this.headers.set(header, headers[header]));
  }

  public getJson(resp: Response) {
    const r: any = _.clone(resp);
    return r && r._body && r._body.length ? resp.json() : resp;
  }

  public checkForError(resp: Response): Response {
    if (resp.status >= 500) {
      return resp;
    } else if (resp.status >= 200 && resp.status < 300) {
      return resp;
    } else if (resp.status === 401) {
      const error = new Error(resp.statusText);
      error['response'] = resp;
      // Do any actions here, to handle 'Unauthorized'
      throwError(error);
    } else {
      const error = new Error(resp.statusText);
      error['response'] = resp;
      throwError(error);
    }
  }

  public catchErr(err: any) {
    if (err && err._body && typeof err._body === 'string') {
      const errBody: any = JSON.parse(err._body);
      err.message = errBody && errBody.error && errBody.error.message ?
        errBody.error.message : 'Error.';
    }
    return Observable.throw(err);
  }

  protected getDefaultOptions(optionalHeaders?: any): RequestOptions {
    const appUser: any = this.getCurrentUser();
    const headersObj: any = {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    };
    if (appUser && appUser.authToken) {
      headersObj.Authorization = 'Bearer ' + appUser.authToken;
    }
    const headers: any = new Headers(optionalHeaders || headersObj);
    return new RequestOptions({ headers });
  }
}
