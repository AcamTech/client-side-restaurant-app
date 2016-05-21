import {createValidator, required, email} from 'businessLogic/validations';

const addStaffMemberValidations = createValidator({
  email: [required, email],
  password: [required]
});

export default addStaffMemberValidations;
