export interface Note extends NewNote {
  id: string;
  createdAt: string;
}

export type NoteTag = 'Todo' | 'Work' | 'Personal' | 'Meeting' | 'Shopping';

export interface NewNote {
  title: string;
  content: string;
  tag: NoteTag;
}
