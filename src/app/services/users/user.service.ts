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
  public getUsers(params?: string): Observable<any> {
    return this.api.get(`${this.path}${params || ''}`);
  }

  public createNewUser(user: any) {
    return this.api.post(`${this.path}`, user);
  }

  public updateUser(user: any, userId: number) {
    return this.api.put(`${this.path}/${userId}`, user);
  }

  /**
   * Delete user by id
   * @param {number} id
   * @returns {Observable<any>}
   */
  public deleteUser(id: number) {
    return this.api.delete(`${this.path}/${id}`);
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
