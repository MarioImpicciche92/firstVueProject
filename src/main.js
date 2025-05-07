import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import FriendContact from './components/friendContact/FriendContact.vue'
import AddFriend from './components/addFriend/AddFriend.vue'
const app = createApp(App)
app.component('friend-contact', FriendContact)
app.component('add-friend', AddFriend)
app.mount('#app')
