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
    db.collection("todos").onSnapshot(snapshot => {
      let changes = snapshot.docChanges();
      changes.forEach(change => {
        if (change.type == "added") {
          const data = {
            id: change.doc.id,
            title: change.doc.data().title,
            timestamp: change.doc.data().timestamp
          };
          this.toDos.push(data);
        } else if (change.type == "removed") {
          var listToDelete = [change.doc.id];
          for (var i = 0; i < this.toDos.length; i++) {
            var obj = this.toDos[i];

            if (listToDelete.indexOf(obj.id) !== -1) {
              this.toDos.splice(i, 1);
              i--;
            }
          }
        }
      });
    });
  },
  methods: {
    createNew(toDo) {
      db.collection("todos").add({
        title: toDo,
        timestamp: new Date()
      });
    },
    deleteToDo(id) {
      db.collection("todos")
        .doc(id)
        .delete();
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



