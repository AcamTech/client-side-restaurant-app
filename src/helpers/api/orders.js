import { normalize, Schema, valuesOf } from 'normalizr';
import Firebase, {ref} from 'constants/firebase';
import {getInnerDataFromUrl, ArrayToObject} from 'helpers/format-helpers';


export function getOrdersForWaiter(waiterId, restaurantId){
  var promise = ref.child(`restaurants_staff/${waiterId}/orders`)
    .once('value');
  return getInnerDataFromUrl(promise, ref, `restaurants/${restaurantId}/orders`);
}
