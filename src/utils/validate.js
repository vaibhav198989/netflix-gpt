export function validateForm( email, password) {

   const validateEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
   const validatePassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
   if(!validateEmail) return 'Email invalid'
   if(!password) return 'Password invalid'
   return null;
}