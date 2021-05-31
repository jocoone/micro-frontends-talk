<template>
  <div class="chat">
    <div class="messages">
      <div
        v-for="message in messages"
        v-bind:key="message.id"
        v-bind:class="{ me: message.me, teacher: message.teacher }"
        class="message"
      >
        <div class="container">
          <b v-if="message.sender">{{ message.sender }}</b>
          <i v-if="message.image">Screenshot taken</i>
          <span v-if="message.message">{{ message.message }}</span>
          <img
            v-bind:src="message.image"
            v-if="message.image"
            alt="screenshot"
          />
        </div>
      </div>
    </div>
    <input
      placeholder="Type to chat"
      v-on:keyup.enter="submit"
      v-on:keydown="keydown"
    />
  </div>
</template>

<script>
export default {
  name: 'Chat',
  el: '#chat-1',
  data: () => ({
    messages: [
      { id: 1, sender: 'John Doe', message: 'Hi Teacher, How are you?' },
    ],
  }),
  methods: {
    dispatchEvent: function(id) {
      window.dispatchEvent(
        new CustomEvent('top-pick:clicked', {
          bubbles: false,
          detail: id,
        })
      );
    },
    submit: function(event) {
      if (event.target.value) {
        this.messages.push({
          id: this.messages.length + 1,
          sender: 'Joey',
          message: event.target.value,
          me: true,
        });
        event.target.value = '';
      }
    },
    sendMessage: function(sender, message, image, teacher) {
      this.messages.push({
        id: this.messages.length + 1,
        sender,
        message,
        teacher,
        image,
        me: !!image,
      });
    },
    keydown: function(event) {
      if (event.keyCode === 32 || event.keyCode === 13) {
        event.stopPropagation();
      }
    },
  },
  created() {
    setTimeout(() => {
      this.sendMessage('Marie', 'Goodmorning everyone');
    }, 5000);
    setTimeout(() => {
      this.sendMessage(
        'Teacher',
        "If everyone is ready, we'll start",
        null,
        true
      );
    }, 15000);
    window.addEventListener('bednet:webcam:capture', (event) => {
      this.sendMessage(null, null, event.detail.imageSrc);
    });
  },
};
</script>

<style scoped>
.chat {
  list-style: none;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 5px;
  position: relative;
  height: 100%;
}
.chat .messages {
  max-height: 90%;
  overflow-y: scroll;
}
.chat .message {
  list-style: none;
  display: flex;
  margin-bottom: 8px;
}
.chat .message.me {
  justify-content: flex-end;
}
.chat .message .container {
  background-color: rgb(233, 233, 233);
  padding: 10px 15px;
  border-radius: 10px;
  text-align: left;
}
.chat .message .container img {
  width: 80%;
}
.chat .message .container b {
  display: block;
  font-size: 0.8em;
}
.chat .message .container i {
  display: block;
  font-size: 0.8em;
}
.chat .message.me .container {
  background-color: rgb(90, 175, 231);
}
.chat .message.teacher .container {
  background-color: rgb(240, 159, 128);
}
.chat input {
  position: absolute;
  bottom: 15px;
  width: 92%;
  left: 2%;
  border-radius: 3px;
  padding: 10px 5px;
  font-size: 1.2em;
  border: 1px solid rgb(196, 196, 196);
}
</style>
