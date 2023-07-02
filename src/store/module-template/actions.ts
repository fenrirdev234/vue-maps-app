
import type { ExampleStateInterface } from './state';
import  type{ StateInterface } from '../index';
import type { ActionTree } from 'vuex/types/index.js';


const actions: ActionTree<ExampleStateInterface, StateInterface> = {
    someAction( /*{ commit }, payload  */ ) {
        // a line to prevent linter errors
    }
}



export default actions;