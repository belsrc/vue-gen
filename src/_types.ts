export interface Answers {
  name: string;
  file: string;
  component: string;
  state: boolean;
  functional?: boolean;
  destination?: string;
  quiet?: boolean;
}

export interface Question {
  type: string;
  name: string;
  message: string;
  choices?: string[];
  default?: boolean | string;
  when: (answers?: Answers) => boolean;
  filter?: (val: boolean | string) => boolean | string;
}
