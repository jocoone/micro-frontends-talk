<template>
  <ul class="top-pick-container">
    <li class="top-pick-item" v-on:click="dispatchEvent('1')">
      <h1>1.</h1>
      <div>
        <h2>Functional Typescript</h2>
        <div>Pieter-Jan Dergent</div>
      </div>
    </li>
    <li class="top-pick-item" v-on:click="dispatchEvent('2')">
      <h1>2.</h1>
      <div>
        <h2>How I ruined my summer and saved yours</h2>
        <div>Gert Guttig</div>
      </div>
    </li>
    <li class="top-pick-item" v-on:click="dispatchEvent('3')">
      <h1>3.</h1>
      <div>
        <h2>Building like a boss with Bazel</h2>
        <div>Arno Chauveau</div>
      </div>
    </li>
    <li class="top-pick-item" v-on:click="dispatchEvent('4')">
      <h1>4.</h1>
      <div>
        <h2>Improve your QA</h2>
        <div>Bart van Raemdonck</div>
      </div>
    </li>
    <li class="top-pick-item" v-on:click="dispatchEvent('5')">
      <h1>5.</h1>
      <div>
        <h2>Using Xamarin in the real world</h2>
        <div>Tom Anckaerts</div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    dispatchEvent: function(id) {
      window.dispatchEvent(new CustomEvent('top-pick:clicked', {
        bubbles: false,
        detail: id
      }));
    }
  }
}
</script>

<style scoped>
  .top-pick-container {
    padding-inline-start: 5px;
    padding-inline-end: 5px;
    margin-top: 5px;
  }

  .top-pick-item {
    list-style: none;
    text-align: center;
    display: flex;
    cursor: pointer;

    background-color: white;
    margin-bottom: 2px;
    border-radius: 5px;
    padding-bottom: 0.67em;
    transition: all .3s ease-out;
  }

  .top-pick-item:hover {
    background-color: #35976b;
    color: white;
  }

  .top-pick-item h1 {
    font-size: 1.8em;
  }

  .top-pick-item h2 {
    font-size: 1.1em;
  }

  .top-pick-item > div {
    text-align: left;
    padding-left: 10px;
  }
</style>
