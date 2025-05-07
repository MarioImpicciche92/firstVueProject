<template src="./add-friend.template.html"></template>
<script>
export default {
  emits: ['add-contact'],
  data() {
    return {
      name: '',
      phone: '',
      email: '',
    }
  },
  methods: {
    submitData() {
      this.emit('add-contact', this.name, this.phone, this.email)
      alert('ttrrrg')
    },
  },
}
</script>
<style src="./add-friend.style.css"></style>
