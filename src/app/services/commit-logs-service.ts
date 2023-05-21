import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiCommit } from '../common/commit.type';
import { ENV } from '../app.module';
import { Environment } from '../common/environment';
import { fromFetch } from 'rxjs/fetch';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommitLogsService {
  constructor(
    private http: HttpClient,
    @Inject(ENV) private environment: Environment
  ) {}

  fetch = () =>
    fromFetch(this.getApiUrl('projects/51/repository/commits')).pipe(
      switchMap(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error number: ' + response.status);
        }
      }),
      map((data: never[]) => data.map(item => item as ApiCommit))
    );

  private getApiUrl = (call: string): string =>
    this.environment.apiPath +
    call +
    '?access_token=' +
    this.environment.apiToken;
}
