// Todo interface
export interface TodoInterface {
    id: string;
    text: string;
    title: string;
    date: Date;
    isCompleted: boolean;
  }

export interface TodoBoxInterface {
    todos: TodoInterface[];
    handleTodoCreate: (todo: TodoInterface) => void;
}


