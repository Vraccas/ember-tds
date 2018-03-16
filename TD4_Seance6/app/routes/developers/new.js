import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
  model(){
    return EmberObject.create();
  },
  actions:{
    save(dev){
      debugger
      dev = this.get('store').createRecord('developers', JSON.parse(JSON.stringify(dev)));
      dev.save().then(() => {
        this.transitionTo('developers');
      });
    }
  }
});
