import { Injectable } from '@angular/core';
import { CommonFlightDetailsModel } from 'libs/common-web-components/src/lib/common-flight-details/models/common-flight-details-model';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'apps/test-angular-webcomponents/src/environments/environment';

@Injectable()
export class FlightDetailsService {

  constructor(private http: HttpClient) { }

  getFlightDetails(): Observable<CommonFlightDetailsModel> {
    return this.http
    .get<CommonFlightDetailsModel>('http://127.0.0.1:8080/turvo/flight/flight-details.json')
    .pipe(catchError(this.handleError));;
  }

  fetchRoles(): Observable<RoleResponse> {
    return this.http
    .get<RoleResponse>('http://127.0.0.1:8080/turvo/common/role.json')
    .pipe(catchError(this.handleError));;
  }

  googleTranslateAPI(lang: string, text: string): Observable<any> {
    let answer = '';
    const url = 'https://translation.googleapis.com/language/translate/v2?';
    return this.http.get(`${url}target=${lang}&key=${environment.googleAPIKey}&q=${text}`)
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}

export interface Role {
  id: string,
  value: string
}
export interface RoleResponse {
  data: Role[],
  totalCount: number
}

