<template>
  <div class="m-5">
    <div class="d-flex justify-content-center align-items-center">
      <h4 class="text-center">{{finished.length}} erledigte Einträge</h4>
      <i @click="showFinish = !showFinish" class="far fa-eye show-finished-icon"></i>
    </div>

    <div class="row mt-2" v-if="showFinish === true">
      <div class="col">
        <ul class="list-group">
          <li v-for=" (item,index) in finished " :key="index" class="list-group-item mb-1">
            {{item.title}}
            <i @click="deleteFinished(index)" class="far fa-trash-alt delete-icon"></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      showFinish: false
    };
  },
  props: ["finished"],
  methods: {
    deleteFinished(index) {
      this.$emit("deleteFinished", index);
    }
  }
};
</script>

<style scoped>
.delete-icon {
  float: right;
  cursor: pointer;
}
.show-finished-icon {
  margin-left: 10px;
  margin-bottom: 5px;
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


