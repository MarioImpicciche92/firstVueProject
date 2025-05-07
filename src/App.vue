<template>
  <section>
    <header>
      <h1>My friends</h1>
    </header>
    <add-friend @add-contact="addingContact"> </add-friend>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
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
          isFavorite: true,
        },
        {
          id: 'allie',
          name: 'Allie Tate',
          phone: '0215546442',
          email: 'allie@hhffggr.it',
          isFavorite: false,
        },
      ],
    }
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      const identifyFriend = this.friends.find((friend) => friend.id === friendId)
      identifyFriend.isFavorite = !identifyFriend.isFavorite
    },
    addingContact(name, phone, email) {
      const newFriendContact = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
        isFavorite: false,
      }
      this.friends.push(newFriendContact)
      alert('rrghg')
    },
  },
}
</script>
