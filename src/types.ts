export interface Task {
  _id: string | number;
  name: string;
  preview: string;
  body: string;
  deadline: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
