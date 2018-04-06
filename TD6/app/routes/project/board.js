import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params){
    return RSVP.hash({
      project: this.get('store').findRecord('project', params.project_id),
      steps: this.get('store').findAll('step'),
    });
  }
});
