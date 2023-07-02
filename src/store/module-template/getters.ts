

import type { ExampleStateInterface } from './state';
import type { StateInterface } from '../index';
import type{ GetterTree } from  'vuex/types/index.js'



const getters: GetterTree<ExampleStateInterface, StateInterface> = {
    someGetter( /* state */ ) {
        // return true;
    }
}



export default getters;