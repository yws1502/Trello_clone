<template>
  <div>
    Card
    <div>card id : {{cid}}</div>
  </div>
</template>

<script>
export default {
  computed: {
    cid() {
      return this.$route.params.cid;
    }
  }
};
</script>

<style></style>
