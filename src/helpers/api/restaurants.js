import Firebase, {ref} from 'constants/firebase';
import { normalize, Schema, arrayOf, valuesOf } from 'normalizr';
const restaurantRef = ref.child('restaurants');

var restaurantSchema = new Schema('restaurants');
var tablesSchema = new Schema('tables');
var waitersSchema = new Schema('waiters');
var ordersSchema = new Schema('orders');
var categoriesSchema = new Schema('categories');
var ingredientsSchema = new Schema('ingredients');
var dishesSchema = new Schema('dishes');

restaurantSchema.define({
  tables: valuesOf(tablesSchema),
  waiters: valuesOf(waitersSchema),
  orders: valuesOf(ordersSchema),
  categories: valuesOf(categoriesSchema),
  ingredients: valuesOf(ingredientsSchema),
  dishes: valuesOf(dishesSchema)
});


export function fetchRestaurant(restaurantId){
  return restaurantRef.child(`${restaurantId}`)
    .once('value')
    .then(snapshot => ({[snapshot.key()]: snapshot.val()}))
    .then(response => normalize(response, valuesOf(restaurantSchema)));
}

export function fetchRestaurants(){
  return restaurantRef.once('value')
    .then(snapshot => snapshot.val())
    .then(response => normalize(response, valuesOf(restaurantSchema)));
}

export function createRestaurant(restaurant){
  var id = restaurantRef.push().key();
  var timeStamp = Firebase.ServerValue.TIMESTAMP;
  var promise = restaurantRef.child(id).set({...restaurant, createdAt: timeStamp, udatedAt: timeStamp, id});
  return {
    id,
    promise
  };
}
