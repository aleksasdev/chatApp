export const MINIMUM_LENGTH_8 = "min8";
export const MINIMUM_AGE_13 = "age13";
export const HAVE_EMAIL_SIGN = "@";
export const HAVE_VALID_EMAIL = "email";
export const HAVE_GMAIL_PREFIX = ".gmail";

export function isError(setError, currentValue, requirements){
   
   if(!requirements) return false;

   const isRequirementsTypeofString = typeof(requirements) === "string";
   if(!isRequirementsTypeofString) requirements = requirements.toString()

   for(const requirement of requirements.split(",")){
      
      const output = doesMeetRequirement(requirement, currentValue);
      if(output !== true){
         setError(output)
         return true;
      }

   }

   return false;
}

export function doesMeetRequirement(requirement, currentValue){

   if(requirement === MINIMUM_LENGTH_8){
      if(currentValue.length < 8) return "Your text has to be 8 characters long";
   }

   else if(requirement === MINIMUM_AGE_13){
      if(!currentValue || parseInt(currentValue) < 13) return "You can't use this site if you aren't at least 13 years old";
   }

   else if(requirement === HAVE_EMAIL_SIGN){
      if(!currentValue.includes("@")) return "You have to put '@' symbol";
   }

   else if(requirement === HAVE_VALID_EMAIL){
      if(!currentValue.includes("@") || !currentValue.includes(".com")) return "You have to use a valid email address";
   }

   else if(requirement === HAVE_GMAIL_PREFIX){
      if(!currentValue.includes("gmail.com")) return "You have to use a gmail account";
   }

   return true;
}