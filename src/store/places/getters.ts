

import type { PlacesState } from './state';
import type { StateInterface } from '../index';
import type{ GetterTree } from  'vuex/types/index.js'



const getters: GetterTree<PlacesState, StateInterface> = {
   isUserlocationReady(state){
    return !state.userLocation
   }
}



export default getters;