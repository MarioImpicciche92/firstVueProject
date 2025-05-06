<template>
  <li>
    <h1>{{ name }} {{ friendFavorite ? '(Favorite)' : '' }}</h1>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>Email:</strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
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
      friendFavorite: Boolean,
      friend: {
        id: 'manuel',
        name: 'Manuel Lorenz',
        phone: '021554654',
        mail: 'manuelffjlm',
      },
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    },
    toggleFavorite() {
      this.friendFavorite = !this.isFavorite
    },
  },
}
</script>
<style src="./friend-contact.style.css"></style>
