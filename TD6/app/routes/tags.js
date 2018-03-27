import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(){
    return RSVP.hash({
      tags:this.get('store').findAll('tag'), //There is no problem with this name, the missing 's' will be added automatically
      fields:['title', 'color'],
      operations: [{icon:'edit', link:'tags.update'}, {icon:'red remove', link:'tags.delete'}],
    });
  }
});
