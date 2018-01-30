import Route from '@ember/routing/route';

import EmberObject, { computed } from '@ember/object';
import { notEmpty } from '@ember/object/computed';

const Note = EmberObject.extend({
  alertVisible:notEmpty('info'),
  content:'Veuillez saisir des caractères',
  MAX:100,
  size:computed('content', function() {
    let content = this.get('content');
    if(content){
      this.set('info', 'Note modifée');
    }
    let MAX = this.get('MAX');
    return (MAX - content.length);
  }),
  style:computed('size', function(){
      let size=this.get('size');
      let style= 'alert-info';
      if(size<=50){
          style='alert-warning';
      }
      if(size<20){
        style='alert-danger';
      }
      return style;
  }),
});

export default Route.extend({
  model(){
    return Note.create({
      MAX: 100,
      content: 'Ah !',
    });
  },
  actions:{
    saved:function(model){
      model.set('info', `Note enregistrée : <b>${model.get('content')}</b>`);
    },
    clear:function(model){
      model.set('content', '');
      model.set('info', '');
    },
  },
});
