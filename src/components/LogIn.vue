<template>
  <div class="pt-5">
    <h3>Log In</h3>
    <b-form @submit="login" v-if="show">
      <b-form-group id="exampleInputGroup1" label="Email:" label-for="exampleInput1">
        <b-form-input
          id="exampleInput1"
          type="email"
          v-model="email"
          required
          placeholder=" email"
        />
      </b-form-group>

      <b-form-group id="exampleInputGroup2" label="Passwort:" label-for="exampleInput2">
        <b-form-input
          id="exampleInput3"
          type="password"
          v-model="password"
          required
          placeholder="Passwort "
        />
      </b-form-group>

      <b-button @click="login" type="submit" variant="primary">Bestätigen</b-button>
    </b-form>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
      show: true
    };
  },
  methods: {
    login(evt) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert(`Du bist erfolgreich eingeloggt als ${this.email}`);
            this.$router.push({ name: "home" });
          },
          err => {
            alert(err.message);
          }
        );
      evt.preventDefault();
    }
  }
};
</script>



