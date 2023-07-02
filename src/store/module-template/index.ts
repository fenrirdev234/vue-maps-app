import type { Module } from 'vuex/types/index.js'


import type{ StateInterface } from '../index';
import type { ExampleStateInterface } from './state';
import state from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutation';



const exampleModule: Module<ExampleStateInterface, StateInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default exampleModule;