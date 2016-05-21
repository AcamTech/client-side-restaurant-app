import {createValidator, required, email} from 'businessLogic/validations';

const addStaffMemberValidations = createValidator({
  email: [required, email],
  oldPassword: [required],
  newPassword: [required]
});

export default addStaffMemberValidations;
