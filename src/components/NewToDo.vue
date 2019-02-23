<template>
  <div>
    <label class="input pt-5">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <button
            @click="newToDo"
            class="btn btn-secondary my-btn"
            type="button"
            id="button-addon1"
          >Hinzufügen</button>
        </div>
        <input
          v-model="toDo"
          @keydown.enter="newToDo"
          type="text"
          class="form-control"
          placeholder
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        >
      </div>
    </label>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      toDo: ""
    };
  },
  methods: {
    newToDo() {
      this.$emit("newItem", this.toDo);
      this.toDo = "";
    }
  }
};
</script>


<style>
.input {
  width: 70%;
  display: block;
  margin: auto;
  text-align: auto;
}
.my-btn {
  color: aqua;
}
</style>



