import type { MutationTree } from 'vuex/types/index.js'
import type  { ExampleStateInterface } from './state';


const mutations: MutationTree<ExampleStateInterface> = {
    someMutation( /* state: ExampleStateInterface */) {
        // a line to prevent linter errors
    }
}


export default mutations;