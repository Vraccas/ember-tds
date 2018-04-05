import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';
import Ember from 'ember';

export default Route.extend({
  model(){
    return RSVP.hash({
        tag : EmberObject.create(),
        colors:['black','blue','green','orange','pink','purple','red','teal','yellow','positive','negative'],
    });
  },

  actions:{
    save:function(oldValue,newValue){
      let ch;
      let tag = this.get('store').createRecord('tag', JSON.parse(JSON.stringify(newValue)));
      let model = this.modelFor(this.routeName);
      ch = JSON.stringify(newValue);
      console.log("Vlua de ch : "+ch);
      tag.save().then(()=>{this.transitionTo("tags");}).
      catch((error)=>console.log(error));
    },
    cancel(){
      this.transitionTo("tags");
    }
  }
});
