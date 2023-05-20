import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiCommit } from '../types/commit.type';
import { ENV } from '../app.module';
import { Environment } from '../types/environment';

@Injectable({
  providedIn: 'root',
})
export class CommitLogsService {
  constructor(
    private http: HttpClient,
    @Inject(ENV) private env: Environment
  ) {}

  getLog = () =>
    this.http.get<ApiCommit[]>(
      this.getApiUrl('projects/51/repository/commits')
    );

  private getApiUrl = (call: string): string =>
    this.env.apiPath + call + '?access_token=' + this.env.apiToken;
}
