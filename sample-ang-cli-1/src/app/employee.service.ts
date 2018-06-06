import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { Comment } from './comment.interface';

@Injectable()
export class EmployeeService {
    private _url: string = "https://jsonplaceholder.typicode.com/posts/1/comments";
    constructor(private _http: Http) {
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>EmployeeService()>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    }
    getEmployees() {
        /*  return [
              { id: "100", name: 'Manohar' },
              { id: "700", name: 'Raj' },
              { id: "1900", name: 'Kumar' },
              { id: "1050", name: 'Ajay' },
              { id: "14500", name: 'Deva' }
          ];*/
        return this._http.get(this._url).map((response: Response) => response.json());
    }
    getEmployees1() {
        /*  return [
              { id: "100", name: 'Manohar' },
              { id: "700", name: 'Raj' },
              { id: "1900", name: 'Kumar' },
              { id: "1050", name: 'Ajay' },
              { id: "14500", name: 'Deva' }
          ];*/
        return this._http.get(this._url).map((response: Response) => response.json()).toPromise().catch(this.promiseError);
    }

    promiseError(res: Response) {
        console.log('Error occured:'+res);
        throw res;
    }
}