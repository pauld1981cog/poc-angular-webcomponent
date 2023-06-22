import { Injectable } from '@angular/core';
import { CommonFlightDetailsModel } from 'libs/common-web-components/src/lib/common-flight-details/models/common-flight-details-model';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FlightDetailsService {

  constructor(private http: HttpClient) { }

  getFlightDetails(): Observable<CommonFlightDetailsModel> {
    return this.http
    .get<CommonFlightDetailsModel>('http://127.0.0.1:8080/turvo/flight/flight-details.json')
    .pipe(catchError(this.handleError));;
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
