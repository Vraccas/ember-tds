import { helper } from '@ember/component/helper';

export function pluriels(params, namedArgs) {
  let nombre = namedArgs.number;
  if(nombre==0){
    return "no items";
  }
  else{
    if(nombre>1){
      return nombre+" items";
    }
  }
  return nombre+" item";
}

export default helper(pluriels);
