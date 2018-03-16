import Route from '@ember/routing/route';

export default Route.extend({
  model(){

  },
  actions:{
    insertion(model){
      this.get('store').createRecord('projects', {name:"Ah ! ", descriptif:"Un projet", startDate:"12-07-1998", dueDate:"15-07-2018"});
    },
  },
});
