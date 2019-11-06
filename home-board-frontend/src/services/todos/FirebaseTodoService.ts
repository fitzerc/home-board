import { firestore } from "firebase";
import { Todo } from "../../components/todos/Todo";

export default class FirebaseTodoService {
  constructor(private db: firestore.Firestore) {}

  getTodos() {
    return this.db
      .collection("todos")
      .get()
      .then(querySnapshot => {
        return querySnapshot;
      });
  }

  addTodo(todo: Todo) {
    return this.db.collection("todos").add(todo);
  }

  deleteTodo(todo: Todo) {
    const todoRef = this.db.collection("todos").doc(todo.id);
    todoRef.delete();
  }

  promiseTodos(): Promise<Todo[]> {
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
