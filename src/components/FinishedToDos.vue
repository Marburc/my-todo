<template>
  <div class="m-5">
    <div class="d-flex justify-content-center align-items-center">
      <h4 class="text-center">{{toDos.length}} erledigte Einträge</h4>
      <i @click="showFinished = !showFinished" class="far fa-eye show-finished-icon"></i>
    </div>

    <div class="row mt-2" v-if="showFinished == true">
      <div class="col">
        <ul class="list-group">
          <li v-if="toDo.completed == true" v-for=" (toDo,index) in toDos " :key="index" class="list-group-item mb-1">
            {{toDo.title}}
            <div class="icons">
            <i @click="checkToDo(toDo)" class="far fa-check-circle"></i>
            <i @click="deleteToDo(toDo.id)" class="far fa-trash-alt delete"></i>
          </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function (){
    return {
      showFinished: false
    }
  },
  props: ["toDos"],
  methods: {
    deleteFinished(index) {
      this.$emit("deleteFinished", index);
    },
    checkToDo(index) {
      this.$emit("checkToDo", index);
    }
  }
};
</script>

<style scoped>
.show-finished-icon {
  cursor: pointer;
 margin-left: 5px;
 padding-bottom: 5px;
}
.icons {
  float: right;
}
.icons i {
  margin-left: 7px;
  cursor: pointer;
}

.list-group-item {
  text-align: center;
  width: 78%;

  display: block;
  margin: auto;
  text-align: auto;
}
</style>


