import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
  model(params){
    return new RSVP.hash({
      story: this.get('store').findRecord('story',params.story_id)
    });
  },
  afterModel(model){
    Ember.set(model,'data',EmberObject.create(JSON.parse(JSON.stringify(model.story))));
  },
  actions:{
    save(story,data){
      Ember.set(story,'code',data.code);
      Ember.set(story,'description',data.description);
      story.save().then(()=>{
        this.transitionTo("projects");
      })
    },
    cancel(){
      this.transitionTo("steps");
    }
  }
});
