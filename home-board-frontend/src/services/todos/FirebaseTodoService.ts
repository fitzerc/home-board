import { firestore } from "firebase";
import { Todo } from "../../components/todos/Todo";
import ITodoService from "./ITodoService";

export default class FirebaseTodoService implements ITodoService {
  constructor(private db: firestore.Firestore) {}

  addTodo(todo: Todo): Promise<Todo> {
    return this.db
      .collection("todos")
      .add(todo)
      .then(ref => {
        return new Promise<Todo>((resolve, reject) => {
          resolve({
            id: ref.id,
            item: todo.item,
            doDate: todo.doDate
          });
        });
      });
  }

  deleteTodo(todo: Todo) {
    const todoRef = this.db.collection("todos").doc(todo.id);
    todoRef.delete();
  }

  getTodos(): Promise<Todo[]> {
    return this.db
      .collection("todos")
      .get()
      .then(todos => {
        return new Promise<Todo[]>((resolve, reject) => {
          resolve(
            todos.docs.map(todo => {
              return {
                id: todo.id,
                item: todo.data().item,
                doDate: todo.data().doDate
              };
            })
          );
        });
      });
  }
}
