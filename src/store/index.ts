import { createStore } from 'vuex/types/index.js'


// My custom modules


import type { PlacesState } from './places/state';
import placesModule from './places';
 

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  places: PlacesState
}

export default createStore<StateInterface>({
  modules: {
    places:placesModule
  }
})