import {createValidator, required} from 'src/businessLogic/validations';

const createRestaurantValidations = createValidator({
  name: [required],
  address: [required]
});

export default createRestaurantValidations;
