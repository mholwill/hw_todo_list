import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [
        {name: "Wash Car", completed: true},
        {name: "Pay bills", completed: false},
        {name: "Shopping", completed: false}
      ],
      newItem: "",
    },
    methods: {
      saveNewItem: function () {
        this.items.push({
          name: this.newItem,
          completed: false
        });
      this.newItem = '';
    },
      removeItem: function (index) {
        this.items.splice(index, 1);
      }
    }
  });
});
