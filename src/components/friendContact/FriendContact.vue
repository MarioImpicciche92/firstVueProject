<template>
  <li>
    <h1>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h1>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>Email:</strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    id: String,
    name: {
      type: String,
      required: true,
    },
    phoneNumber: Number,
    emailAddress: String,
    isFavorite: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      detailsAreVisible: false,
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id)
    },
  },
}
</script>
<style src="./friend-contact.style.css"></style>
