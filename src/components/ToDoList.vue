<template>
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <app-toDoItem v-for="(toDo, index) in toDos" :key="index">
          {{toDo}}
          <div class="icons">
            <i @click="finishToDo(index)" class="far fa-check-circle"></i>
            <i @click="deleteToDo(index)" class="far fa-trash-alt delete"></i>
          </div>
        </app-toDoItem>
      </ul>
    </div>
  </div>
</template>

<script>
import ToDoItem from "./ToDoItem.vue";
export default {
  props: ["toDos"],
  components: {
    "app-toDoItem": ToDoItem
  },
  methods: {
    deleteToDo(index) {
      this.$emit("deleteToDo", index);
    },
    finishToDo(index) {
      this.$emit("finishToDo", index);
    }
  }
};
</script>
<style scoped>
.icons {
  float: right;
}
.icons i {
  margin-left: 7px;
  cursor: pointer;
}
</style>


