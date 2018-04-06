import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
  model(params){
    return new RSVP.hash({
      story: this.get('store').findRecord('story',params.story_id),
      project: this.get('store').findRecord('project',params.project_id),
      developers: this.get('store').findAll('developer'),
      idDeveloper:[],
      idTags:[],
      tags: this.get('store').findAll('tag'),
    });
  },
  afterModel(model){
    Ember.set(model,'data',EmberObject.create(JSON.parse(JSON.stringify(model.story))));
  },
  actions:{
    save(story,data){
      let model = this.modelFor(this.routeName);
      let project=Ember.get(model,'project');
      Ember.set(story,'code',data.code);
      Ember.set(story,'description',data.description);
      let idDeveloper = data.developer;
      let dev = Ember.get(model, 'developers').find(dev => dev.id == idDeveloper);
      story.set('developer', dev);
      let self=this;
      story.save().then(()=>{
        project.save().then(()=>{self.transitionTo("project",project);});
      })
    },
    cancel(){
      this.transitionTo("steps");
    }
  }
});
