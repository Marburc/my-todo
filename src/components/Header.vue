<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">Mega ToDo</b-navbar-brand>

      <b-navbar-toggle target="nav_collapse"/>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item disabled class="text-white" v-if="user">Eingeloggt als: {{user.email}}</b-nav-item>
          <b-nav-item to="/" href="#">Home</b-nav-item>
          <b-nav-item v-if="!user" to="/register" href="#">Register</b-nav-item>
          <b-nav-item v-if="!user" to="/login" href="#">Log in</b-nav-item>
          <b-button v-if="user" size="sm" class="my-2 my-sm-0" @click="logout">Logout</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "navbar",
  data() {
    return {
      user: null,
      currentUser: false
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
        console.log(user);
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go({ path: this.$router.path });
        });
    }
  }
};
</script> 



