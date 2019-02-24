<template>
  <div id="app">
    <div class="container">
      <app-newToDo @newItem="createNew"></app-newToDo>
      <app-toDoList :toDos="toDos" @deleteToDo="deleteToDo" @finishToDo="finishToDo"></app-toDoList>
      <app-finishedToDo :finished="finished" @deleteFinished="deleteFinished"></app-finishedToDo>
    </div>
  </div>
</template>

<script>
import db from "./firebaseInit.js";
import NewToDo from "./NewToDo.vue";
import ToDoList from "./ToDoList.vue";
import FinishedToDos from "./FinishedToDos.vue";
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
    "app-finishedToDo": FinishedToDos
  },
  created() {
    db.collection("todos")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          const data = {
            id: doc.id,
            title: doc.data().title
          };
          this.toDos.push(data);
        });
      });
  },
  methods: {
    createNew(toDo) {
      db.collection("todos").add({
        titel: toDo
      });
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



