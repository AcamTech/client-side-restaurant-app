import {createValidator, required, minLength} from 'businessLogic/validations';

const addCategoryValidations = createValidator({
  name: [required, minLength(3)]
});

export default addCategoryValidations;
