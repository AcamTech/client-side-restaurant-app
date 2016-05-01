import {createValidator, required, integer} from 'businessLogic/validations';

const addTableValidations = createValidator({
  number: [required, integer]
});

export default addTableValidations;
