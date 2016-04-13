const SET_BLOGINFO = 'set/blog/info';
/* const SET_BLOGINFO_SUCCESS = 'set/blog/info/success';
const SET_BLOGINFO_FAIL = 'set/blog/info/fail'; */

const initialState = {
  data: require('../../db/jsonData/blogGroup.json').blogGroupBox
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_BLOGINFO:
      return {
        ...state,
        data: action.result
      };
    default:
      return state;
  }
}
