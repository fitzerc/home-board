import { Todo } from "../components/todos/Todo";
import { Meal } from "../components/meals/Meal";
import { Grocery } from "../components/groceries/Grocery";
import { getUser } from "../services/FirestoreDb";
import Store from "../components/groceries/Store";

export default {
  todos: [] as Todo[],
  meals: [] as Meal[],
  groceries: [] as Grocery[],
  authenticated: false,
  stores: [] as Store[]
};
