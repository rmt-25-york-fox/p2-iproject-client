<script>
import { mapActions } from 'pinia';
import { useMainStore } from "../stores/main";

export default{
    
    methods:{
        ...mapActions(useMainStore, ['googleSignIn']),

         handleCredentialResponse(response) {
          console.log("Encoded JWT ID token: " + response.credential);
          localStorage.setItem('google_token', response.credential)
          this.googleSignIn()
        }
},

mounted(){

      const cb=this.handleCredentialResponse

      google.accounts.id.initialize({
            client_id: "241806356025-q8a74m4q1i9fjkr1vt4kbb3m76ie5hnk.apps.googleusercontent.com",
            callback: cb
          });
          google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { theme: "outline", size: "large" }  // customization attributes
          );
          google.accounts.id.prompt(); // also display the One Tap dialog

  }

    }

    
</script>

<template>
<!-- Sign In -->
            <div class="rounded  overflow-hidden shadow-lg bg-white mb-2 px-5 py-2">
                <div>
                    <h1 class="text-4xl text-center font-bold my-5 pb-5">Join Us!</h1>
                    <p class="text-center">Join with Google Account:</p>
                    
                     <div id="buttonDiv"></div> 
                </div>
            </div>
</template>