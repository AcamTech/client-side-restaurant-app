import { ref } from 'constants/firebase';

export function fetchStaffFromRestaurant(restaurantId){
  var staffRef = ref.child(`restaurants/${restaurantId}/waiters`);
  return staffRef.once('value')
    .then(snapshot => snapshot.val() || {});
}
