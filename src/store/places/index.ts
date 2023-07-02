import type { Module } from 'vuex/types/index.js'


import type{ StateInterface } from '../index';
import type { PlacesState } from './state';
import state from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutation';



const placesModule: Module<PlacesState, StateInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default placesModule;