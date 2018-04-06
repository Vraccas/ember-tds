import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  tableau:[],
  plusieurs: Ember.computed('tableau', function(){
    let nombre = this.get('tableau').length;
    if(nombre>1){
      return nombre+" items";
    }
    else if(nombre==1){
      return nombre+" item";
    }else{
      return "no items";
    }
  }),
});
