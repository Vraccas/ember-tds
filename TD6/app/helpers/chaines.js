import { helper } from '@ember/component/helper';

export function chaines(params, namedArgs) {
  let chn1 = namedArgs.chn1;
  let chn2 = namedArgs.chn2;
  return chn1==chn2;
}

export default helper(chaines);
