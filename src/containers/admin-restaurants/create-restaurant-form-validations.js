import {createValidator, required} from 'businessLogic/validations';

const createRestaurantValidations = createValidator({
  name: [required],
  address: [required]
});

export default createRestaurantValidations;
