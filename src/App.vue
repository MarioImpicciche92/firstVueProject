<template>
  <section>
    <header><h1>My friends</h1></header>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="true"
      ></friend-contact>
    </ul>
  </section>
</template>
<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '021554654',
          email: 'manuelffjjf',
        },
        {
          id: 'allie',
          name: 'Allie Tate',
          phone: '0215546442',
          email: 'allie@hhffggr.it',
        },
      ],
    }
  },
}
</script>
