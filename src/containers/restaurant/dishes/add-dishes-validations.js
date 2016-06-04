import {createValidator, required, integer} from 'businessLogic/validations';

const addDishesValidations = createValidator({
  name: [required],
  price: [required, integer],
  description: [required],
  category: [required],
  ingredients: [required]
});

export default addDishesValidations;
