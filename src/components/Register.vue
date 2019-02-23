<template>
  <div class="pt-5">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="exampleInputGroup1" label="Email:" label-for="exampleInput1">
        <b-form-input
          id="exampleInput1"
          type="email"
          v-model="form.email"
          required
          placeholder=" email"
        />
      </b-form-group>

      <b-form-group id="exampleInputGroup2" label="Your Name:" label-for="exampleInput2">
        <b-form-input
          id="exampleInput2"
          type="text"
          v-model="form.name"
          required
          placeholder="Benutzername "
        />
      </b-form-group>

      <b-form-group id="exampleInputGroup2" label="Passwort:" label-for="exampleInput2">
        <b-form-input
          id="exampleInput2"
          type="text"
          v-model="form.password"
          required
          placeholder="Passwort "
        />
      </b-form-group>

      <b-button type="submit" variant="primary">Bestätigen</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        password: ""
      },

      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      axios
        .post("https://testprojekt-14901.firebaseio.com/users.json", this.form)
        .then(res => console.log(res))
        .catch(error => console.log(error));
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = "";
      this.form.name = "";
      this.form.password = "";
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

