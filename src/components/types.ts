export interface Post {
  id: number;
  title: string;
  body: string;
  [key: string]: string | number | undefined;
}

export interface Option {
  name: string;
  value: string;
}
