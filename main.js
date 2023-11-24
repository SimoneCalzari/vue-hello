'use strict';

const { createApp } = Vue;

createApp({
  data() {
    return {
      messagge: 'Primo giorno di VUE!',
      imgLink: 'https://picsum.photos/500/500',
      imgAlt: 'random photo',
      myClass: 'color',
      myClass2: 'img-center'
    }
  }
}).mount('#pippo')