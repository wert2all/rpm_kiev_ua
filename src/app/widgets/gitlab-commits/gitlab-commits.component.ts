import { Component } from '@angular/core';
import { Commit, createCommitType } from '../../common/commit.type';
import formatRelative from 'date-fns/formatRelative';
import { uk } from 'date-fns/locale';
import { Observable, map, finalize } from 'rxjs';
import { CommitLogsService } from '../../services/commit-logs-service';

@Component({
  selector: 'cv-gitlab-commits',
  templateUrl: './gitlab-commits.component.html',
  styleUrls: ['./gitlab-commits.component.scss'],
})
export class GitlabCommitsComponent {
  constructor(private commitsService: CommitLogsService) {}
  error: string | null = null;
  isLoading = true;

  commits: Observable<Commit[]> = this.commitsService.getLog().pipe(
    map(data => {
      return data
        .filter(commit => commit.parent_ids.length == 1)
        .map(apiCommit => {
          const parsedTitle = this.parseCommitTitle(apiCommit.title);
          return parsedTitle == undefined
            ? null
            : new Commit(
                apiCommit.committer_name,
                apiCommit.committer_email,
                new Date(apiCommit.committed_date),
                parsedTitle.type,
                parsedTitle.title
              );
        })
        .filter(commit => commit != undefined)
        .map(commit => commit as Commit);
    }),
    finalize(() => (this.isLoading = false))
  );

  when = (commit: Commit): string =>
    formatRelative(commit.time, new Date(), { locale: uk });

  private parseCommitTitle(title: string) {
    const match = /^([a-z]+):.?(.+)/gm.exec(title);
    if (match != undefined && match[2].trim() != '') {
      const type = createCommitType(match[1]);
      if (type != undefined) {
        return { type: type, title: match[2] };
      }
    }
    return null;
  }
}
