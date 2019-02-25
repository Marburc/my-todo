<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">Mega ToDo</b-navbar-brand>

      <b-navbar-toggle target="nav_collapse"/>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item  disabled class="text-white"  v-if="isLoggedIn" >Eingeloggt als: {{currentUser}}</b-nav-item>
          <b-nav-item to="/" href="#">Home</b-nav-item>
          <b-nav-item v-if="!isLoggedIn" to="/register" href="#">Register</b-nav-item>
          <b-nav-item v-if="!isLoggedIn" to="/login" href="#">Log in</b-nav-item>
            <b-button v-if="isLoggedIn" size="sm" class="my-2 my-sm-0" @click="logout">Logout</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import firebase from 'firebase'
export default {
  name: 'navbar',
  data(){
    return{
      isLoggedIn: false,
      currentUser: false,
      
    }
  },
  created(){
      if (firebase.auth().currentUser){
        this.isLoggedIn = true;
        this.currentUser = firebase.auth().currentUser.email;
      }
    },
  methods: {
    logout: function() {
      firebase.auth().signOut()
      .then(() => {
         this.$router.go({path: this.$router.path});
      })
    }
  }
};
</script> 



