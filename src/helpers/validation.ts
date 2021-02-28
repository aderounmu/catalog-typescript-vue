import { required , confirmed, email, min, } from 'vee-validate/dist/rules'
import {extend} from 'vee-validate'

extend("required",{
    ...required,
    message: "This field is required"
})
extend("email",{
    ...email,
    message: "This field must be a valid email"
})
extend("confirmed",{
    ...confirmed,
    message: "This field is doesn't match the password"
})
extend("min",{
    ...min,
    message: "This field must be more than 8 characters"
})