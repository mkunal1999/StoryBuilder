import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private functionalityUrl = 'http://127.0.0.1:5000/get_functionality';
    private userStoriesUrl = 'http://127.0.0.1:5000/get_user_stories';
    private submitFileUrl = 'http://127.0.0.1:5000/upload_brd';

    constructor(private http: HttpClient) {}

    // Fetch functionality data
    fetchFunctionalityData(): Observable<any> {
        return this.http.get(this.functionalityUrl).pipe(
             catchError(this.handleError<any>('fetchFunctionalityData', 'Error fetching functionality data'))
        );
    }
    // Fetch user stories data
    fetchUserStoriesData(): Observable<any> {
        return this.http.get(this.userStoriesUrl).pipe(
            catchError(this.handleError<any>('fetchUserStoriesData', 'Error fetching user stories data'))
        );
    }

    // Submit a file to the server
    // submitFile(fileName: string, fileData: any): Observable<any> {
    //     return this.http.post(this.submitFileUrl, { filename: fileName, file: fileData }).pipe(
    //         catchError(this.handleError<any>('submitFile', 'Error submitting the file'))
    //     );
    // }
    submitFile(filename:string,file: File): Observable<any> {
        const formData = new FormData();
        formData.append('file', file);
    
        return this.http.post<any>(this.submitFileUrl, formData, {
          reportProgress: true,
          observe: 'events'
        }).pipe(
            catchError(this.handleError<any>('submitFile', 'Error submitting the file'))
        );
      }

      downloadCsv(userStories: any,fileName:string): Observable<Blob> {
        // Set HTTP headers to specify content type and responseType
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'text/csv'
        });
        return this.http.post<Blob>('http://localhost:5000/download_csv?filename=' + fileName, userStories, {
            headers: headers,
            responseType: 'blob' as 'json' // Specify response type as blob to handle file download
        }).pipe(
            catchError(error => {
                throw 'Error downloading CSV file: ' + error;
            })
        );
    }

    // Handle HTTP errors
    private handleError<T>(operation = 'operation', message = 'operation failed', result?: T): (error: any) => Observable<T> {
        return (error: any): Observable<T> => {
            console.error(`${operation}: ${error.message}`);
            return of(result as T); // Return safe value
        };
    }
}
