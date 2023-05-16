export interface ApiCommit {
  user: string;
}
export enum CommitType {
  FEAT = 'feat',
  BUG = 'bug',
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
