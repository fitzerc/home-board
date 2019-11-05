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
}
