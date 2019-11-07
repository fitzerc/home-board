import { firestore } from "firebase";
import { Meal } from "../../components/meals/Meal";
import IMealService from "./IMealService";
import FirebaseTodoService from "../todos/FirebaseTodoService";

export default class FirebaseMealService implements IMealService {
  constructor(private db: firestore.Firestore) {}

  addMeal(meal: Meal): Promise<Meal> {
    return this.db
      .collection("meals")
      .add(meal)
      .then(ref => {
        return new Promise<Meal>((resolve, reject) => {
          meal.id = ref.id;
          resolve(meal);
        });
      });
  }

  deleteMeal(meal: Meal): void {
    const mealRef = this.db.collection("meals").doc(meal.id);
    mealRef.delete();
  }

  getMeals(): Promise<Meal[]> {
    return this.db
      .collection("meals")
      .get()
      .then(meals => {
        return new Promise<Meal[]>((resolve, reject) => {
          resolve(
            meals.docs.map(meal => {
              return {
                id: meal.id,
                main: meal.data().main,
                side1: meal.data().side1,
                side2: meal.data().side2,
                date: meal.data().date
              };
            })
          );
        });
      });
  }
}
