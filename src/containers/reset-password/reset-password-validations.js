import {createValidator, required, email} from 'businessLogic/validations';

const addStaffMemberValidations = createValidator({
  email: [required, email]
});

export default addStaffMemberValidations;
