<template>
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <app-toDoItem v-if="toDo.completed === false" v-for="(toDo) in toDos" :key="toDo.id">
          {{toDo.title}}
          <div class="icons">
            <i @click="checkToDo(toDo)" class="far fa-check-circle"></i>
            <i @click="deleteToDo(toDo.id)" class="far fa-trash-alt delete"></i>
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
    checkToDo(index) {
      this.$emit("checkToDo", index);
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


