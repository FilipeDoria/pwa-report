<template>
  <section>
    <p>This button has {{ likes }} likes!</p>
    <button @click="likeAndSubscribe()">Like & Subscribe</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      likes: 0,
    };
  },

  methods: {
    likeAndSubscribe() {
      this.likes++;
      alert("Thanks! Have some cake");
    },
  },
};
</script>