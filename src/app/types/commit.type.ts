import { enumFromStringValue } from '../common/utils';

export interface ApiCommit {
  title: string;
  parent_ids: string[];
  committer_email: string;
  committer_name: string;
}
export enum CommitType {
  FEAT = 'feat',
  FIX = 'fix',
  REFACTOR = 'refactor',
}
export class Commit {
  constructor(
    readonly user: string,
    readonly email: string,
    readonly time: Date,
    readonly commitType: CommitType,
    readonly commitTitle: string,
    readonly summary = ''
  ) {}
}

export const createCommitType = (value: string) =>
  enumFromStringValue(CommitType, value);
