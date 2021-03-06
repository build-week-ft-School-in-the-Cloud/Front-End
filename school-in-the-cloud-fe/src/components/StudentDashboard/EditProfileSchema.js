import * as yup from 'yup';

// Used to validate form text inputs
// Validation doesn't need to happen for country, due to choices being
// constrained to a pre-populated dropdown list

const EditProfileSchema = yup.object().shape({
    username: yup.string()
        .trim()
        .min(4, 'The username must be at least 4 characters long.')
        .required('You must enter a username.'),
    forename: yup.string()
        .trim()
        .min(2, 'First name must be at least 2 letters long.')
        .required('You must enter your first name.'),
    surname: yup.string()
        .trim()
        .min(2, 'Last name must be at least 2 letters long.')
        .required('You must enter your last name.')
});

export default EditProfileSchema;