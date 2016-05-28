import {createValidator, required} from 'businessLogic/validations';

const restaurantValidations = createValidator({
  name: [required],
  address: [required],
  phone: [required],
  city: [required]
});

export default restaurantValidations;
