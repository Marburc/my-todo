<template>
  <div id="app">
    <app-header></app-header>
    <div class="container">
      <app-home>
        <app-newToDo @newItem="createNew"></app-newToDo>
        <app-toDoList :toDos="toDos" @deleteToDo="deleteToDo" @finishToDo="finishToDo"></app-toDoList>
        <app-finishedToDo :finished="finished" @deleteFinished="deleteFinished"></app-finishedToDo>
      </app-home>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Header from "./components/Header.vue";
import NewToDo from "./components/NewToDo.vue";
import ToDoList from "./components/ToDoList.vue";
import FinishedToDos from "./components/FinishedToDos.vue";
export default {
  data: function() {
    return {
      toDos: [],
      finished: []
    };
  },
  components: {
    "app-newToDo": NewToDo,
    "app-toDoList": ToDoList,
    "app-finishedToDo": FinishedToDos,
    "app-header": Header,
    "app-home": Home
  },
  methods: {
    createNew(toDo) {
      if (toDo == "") {
        return;
      } else {
        this.toDos.push(toDo);
      }
    },
    deleteToDo(index) {
      this.toDos.splice(index, 1);
    },
    deleteFinished(index) {
      this.finished.splice(index, 1);
    },
    finishToDo(index) {
      let done = this.toDos.splice(index, 1);
      let str = done[0];
      this.finished.push(str);
    }
  }
};
</script>


<style >
#app {
  font-family: "Work Sans", sans-serif;
  background-color: bisque;
  height: 100vh;
}
</style>
