import Firebase, {ref} from 'constants/firebase';
const restaurantRef = ref.child('restaurants');

export function fetchRestaurant(restaurantId){
  return restaurantRef.child(`${restaurantId}`)
    .once('value')
    .then(snapshot => ({id: snapshot.key(), data: snapshot.val()}));
}

export function fetchRestaurants(){
  return restaurantRef.once('value')
    .then(snapshot => snapshot.val());
}

export function createRestaurant(restaurant){
  var id = restaurantRef.push().key();
  var promise = restaurantRef.child(id).set({...restaurant, id});
  var timeStamp = Firebase.ServerValue.TIMESTAMP;
  return {
    id,
    promise,
    createdAt: timeStamp,
    udatedAt: timeStamp
  };
}
