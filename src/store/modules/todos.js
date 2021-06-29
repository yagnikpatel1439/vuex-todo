import axios from 'axios';

const state = {
    todos: [
    {
        id:1,
        title: 'One'
    },
    {
        id:2,
        title: 'Two'
    },
    {
        id:3,
        title: 'Three'
    },

]
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations,
}

