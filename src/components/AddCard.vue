<template>
  <div class="add-card">
    <form @submit.prevent="onSubmit">
      <input
        class="form-control"
        type="text"
        ref="inputText"
        v-model="inputTitle"
      />
      <button class="btn btn-success" type="submit" :disabled="invalidInput">
        Add Card
      </button>
      <a href="" class="cancel-add-btn" @click.prevent="$emit('close')"
        >&times;</a
      >
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["listId"],
  data() {
    return {
      inputTitle: ""
    };
  },
  computed: {
    invalidInput() {
      return !this.inputTitle.trim();
    }
  },
  mounted() {
    this.$refs.inputText.focus();
    this.setupClickOutside(this.$el);
  },
  methods: {
    ...mapActions(["ADD_CARD"]),
    onSubmit() {
      if (this.invalidInput) return;
      const payload = {
        title: this.inputTitle,
        listId: this.listId
      };
      this.ADD_CARD(payload).finally(() => (this.inputTitle = ""));
    },
    setupClickOutside(el) {
      document.querySelector("body").addEventListener("click", event => {
        if (el.contains(event.target)) return;
        this.$emit("close");
      });
    }
  }
};
</script>

<style>
.add-card {
  padding: 10px;
  display: block;
  position: relative;
}
.add-card .cancel-add-btn {
  display: inline-block;
  margin-left: 10px;
  vertical-align: middle;
  text-decoration: none;
  color: #888;
  font-size: 24px;
}
.add-card .cancel-add-btn:hover,
.add-card .cancel-add-btn:focus {
  color: #666;
}
</style>
