<template>
  <Modal>
    <div slot="header">
      <h2>
        Create new board
        <a href="" class="modal-default-button" @click.prevent="close"
          >&times;
        </a>
      </h2>
    </div>
    <div slot="body">
      <form id="add-board-form" @submit.prevent="addBoard">
        <input
          class="form-control"
          type="text"
          v-model="inputValue"
          ref="input"
        />
      </form>
    </div>
    <div slot="footer">
      <button
        class="btn"
        :class="{ 'btn-success': valid }"
        type="submit"
        form="add-board-form"
        :disabled="!valid"
      >
        Create Board
      </button>
    </div>
  </Modal>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  components: {
    Modal
  },
  data() {
    return {
      inputValue: "",
      valid: true
    };
  },
  watch: {
    input(value) {
      this.valid = value.trim().length > 0;
    }
  },
  mounted() {
    this.$refs.input.focus();
  },
  methods: {
    close() {
      this.$emit("close");
    },
    addBoard() {
      this.$emit("close");
      this.$emit("submit", this.inputValue);
    }
  }
};
</script>

<style></style>
