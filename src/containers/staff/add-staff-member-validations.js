import {createValidator, required, email} from 'businessLogic/validations';

const addStaffMemberValidations = createValidator({
  name: [required],
  email: [required, email],
  role: [required]
});

export default addStaffMemberValidations;
