import {createValidator, required, email} from 'businessLogic/validations';

const addStaffMemberValidations = createValidator({
  name: [required],
  email: [required, email]
});

export default addStaffMemberValidations;
