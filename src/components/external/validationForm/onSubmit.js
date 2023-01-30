
import { isInputValid } from './helper';
import { isError } from './requirements';

export function onSubmit(e, formObject){
   e.preventDefault();

   const { onCompleted, inputs, setError } = formObject;

   if(!onCompleted){
      formObject.setError("You're missing 'onCompleted' attribute, provide a callback");
      return;
   }

   const inputValues = [];
   for(const input of inputs.current){

      const currentValue = input?.value;
      const requirements = input?.getAttribute('requirements');

      if(!requirements || currentValue === undefined) continue;

      if(isError(setError, currentValue, requirements)){
         setError(current => current + "; " + "input name: " + input?.name)
         return;
      }
      inputValues.push(currentValue);
   }

   onCompleted(inputValues);
}