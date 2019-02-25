<template>
  <div class="pt-5">
    <h3>Registrieren</h3>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group id="exampleInputGroup1" label="Email:" label-for="exampleInput1">
        <b-form-input
          id="exampleInput1"
          type="email"
          v-model="email"
          required
          placeholder=" email"
        />
      </b-form-group>

      <!-- <b-form-group id="exampleInputGroup2" label="Your Name:" label-for="exampleInput2">
        <b-form-input
          id="exampleInput2"
          type="text"
          v-model="name"
          required
          placeholder="Benutzername "
        />
      </b-form-group> -->

      <b-form-group id="exampleInputGroup2" label="Passwort:" label-for="exampleInput2">
        <b-form-input
          id="exampleInput3"
          type="password"
          v-model="password"
          required
          placeholder="Passwort "
        />
      </b-form-group>

      <b-button @click="onSubmit($event)" type="submit" variant="primary">Bestätigen</b-button>
    </b-form>
    
  </div>
  
</template>

<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      
        email: "",
        password: "",
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
     firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        user => {
         this.$router.go({path: this.$router.path});
        
      },
      err => {
        alert(err.message)
      }
      )
      evt.preventDefault();
      
    },
   }
  }

</script>

