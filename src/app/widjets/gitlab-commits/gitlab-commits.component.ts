import { Component } from '@angular/core';
import { Commit, CommitType } from '../../types/commit.type';
import formatRelative from 'date-fns/formatRelative';
import { uk } from 'date-fns/locale';

@Component({
  selector: 'cv-gitlab-commits',
  templateUrl: './gitlab-commits.component.html',
  styleUrls: ['./gitlab-commits.component.scss'],
})
export class GitlabCommitsComponent {
  error: string | null = null;

  commits: Commit[] = [
    new Commit(
      'wert2all',
      'wert2all@gmail.com',
      new Date(),
      CommitType.FEAT,
      'add goals'
    ),
    new Commit(
      'wert2all',
      'wert2all@gmail.com',
      new Date(),
      CommitType.BUG,
      'add contacts',
      'test'
    ),
  ];

  when = (commit: Commit): string =>
    formatRelative(commit.time, new Date(), { locale: uk });
}
