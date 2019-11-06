import { Grocery } from "../../components/groceries/Grocery";
import { GroceryAction, GroceriesAction } from "./groceryActions";
import {
  CREATE_GROCERY_SUCCESS,
  GET_GROCERIES_SUCCESS,
  DELETE_GROCERY_SUCCESS
} from "./groceryActionTypes";
import groceryReducer from "./groceryReducer";

const state: Grocery[] = [
  {
    id: 1,
    item: "bananas",
    itemType: "perishable"
  },
  {
    id: 2,
    item: "peas",
    itemType: "frozen"
  }
];

describe(`grocery reducer tests`, () => {
  it(`should test state after create success`, () => {
    const action: GroceryAction = {
      type: CREATE_GROCERY_SUCCESS,
      payload: {
        id: 3,
        item: "milk",
        itemType: "refridgerated"
      }
    };

    const result: Grocery[] = [
      state[0],
      state[1],
      {
        id: action.payload.id,
        item: action.payload.item,
        itemType: action.payload.itemType
      }
    ];

    expect(groceryReducer(state, action)).toEqual(result);
  });

  it(`should be state after get success`, () => {
    const action: GroceriesAction = {
      type: GET_GROCERIES_SUCCESS,
      payload: state
    };

    expect(groceryReducer([], action)).toEqual(state);
  });

  it(`should be state after delete`, () => {
    const action: GroceryAction = {
      type: DELETE_GROCERY_SUCCESS,
      payload: state[1]
    };

    expect(groceryReducer(state, action)).toEqual([state[0]]);
  });
});
