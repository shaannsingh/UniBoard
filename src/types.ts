export interface Task {
  id: number;
  name: string;
  preview: string;
  body: string;
  deadline: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
