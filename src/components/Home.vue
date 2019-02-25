<template>
  <div id="app">
    <div class="container">
      <app-newToDo @newItem="createNew"></app-newToDo>
      <app-toDoList :toDos="toDos" @deleteToDo="deleteToDo" @checkToDo="finishToDo"></app-toDoList>
      <app-finishedToDo :toDos="toDos" @deleteFinished="deleteFinished"></app-finishedToDo>
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
            timestamp: change.doc.data().timestamp,
            completed: change.doc.data().completed
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
        timestamp: new Date(),
        completed: false
      });
    },
    deleteToDo(id) {
      db.collection("todos")
        .doc(id)
        .delete();
    },
    deleteFinished(index) {
      this.toDos.splice(index, 1);
    },
    finishToDo(todo) {
      todo.completed = !todo.completed;
      db.collection("todos")
        .doc(todo.id)
        .update({
          completed: todo.completed
        });
    }
  }
};
</script>



