// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require vue 
//= require_tree .

document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      tasks: [
        { name: '12 Push-ups', priority: 8, completed: false},
        { name: '25 Sit-ups', priority: 4, completed: false},
        { name: '50 Jumping-Jacks', priority: 5, completed: false},
        { name: '25 Squats', priority: 6, completed: false}
      ],
      newTask: "",
      newPriority: ""

    },
    mounted: function() {

    },
    methods: { 
      addTask: function() {
        if (this.newTask) {
          this.tasks.push({name: this.newTask, priority: this.newPriority, completed: false});
          this.newTask = "";
          this.newPriority = "";
        }
      },
      removeTasks: function(countTasks) {
        for (var j = 0; j < countTasks.length; j++) {
          var index = this.tasks.indexOf(countTasks[j]);
          this.tasks.splice(index,1);
        }
      },
      checkDone: function(task) {
        task.completed = !task.completed;
      },
      countTasks: function() {
        var countArray = [];
        for (var i = 0; i < this.tasks.length; i++) {
          if (this.tasks[i]["completed"] === true) {
            countArray.push(this.tasks[i]);
          }
        }
        return countArray;
      }

    },
    computed: {

    }
  });
});
