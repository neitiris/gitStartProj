import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../';

@Injectable()
export class UserService {

  protected path = '/user';

  constructor(
    public api: ApiService
  ) {}

  /**
   * Get list of users
   * @returns {Observable<any>}
   */
  public getUsers(): Observable<any> {
    return this.api.get(`${this.path}`);
  }

  /**
   * Get one user by id
   * @param {number | string} id
   * @returns {Observable<any>}
   */
  public getUserById(id: number | string): Observable<any> {
    return this.api.get(`${this.path}/${id}`);
  }
}
