import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [
        {name: "Wash Car", priority: "Low"},
        {name: "Pay bills", priority: "High"},
        {name: "Shopping", priority: "High"}
      ],
      newItem: "",
    },
    methods: {
      saveNewItem: function () {
        this.items.push({
          name: this.newItem,
          priority: "Low"
        });
      this.newItem = '';
      }
    }
  });
});
