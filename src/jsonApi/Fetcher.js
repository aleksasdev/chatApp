export default class Fetcher{
   constructor(url, id){
      this.url = url;
      this.id = id;
   }

   async post(body){
      const response = await fetch(this.url, {
         method: "POST",
         headers:{
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(body)
      })

      this.handleResponse(response);
   }

   async delete(){
      if(!this.isValidId()) return;

      const response = await fetch(`${this.url}/${this.id}`, {
         method: "DELETE",
      })
      
      this.handleResponse(response);
   }

   async put(body){
      if(!this.isValidId()) return;

      const response = await fetch(`${this.url}/${this.id}`, {
         method: "PUT",
         headers:{
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(body)
      })

      this.handleResponse(response);
   }

   async patch(body){
      if(!this.isValidId()) return;

      const response = await fetch(`${this.url}/${this.id}`, {
         method: "PATCH",
         headers:{
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(body)
      })

      this.handleResponse(response);
   }

   isValidId(){
      if(!this.id){
         console.error("No id provided or it's invalid");
         return false;
      }
      return true;
   }

   handleResponse(response){
      if(!response?.ok) console.error(response.status);
      else (console.log(response.status));
   }
}