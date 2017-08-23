import { createAction, handleActions } from 'redux-actions'
import  Config  from '../Config'

const defaultState = { list: 'list', 
Loading: 'true'};

export const added = createAction('Get_User');
export const loaded = createAction('Set_Load');




export default handleActions({
 [added]: (state, { payload }) => ({
    ...state,
    list: payload
  }),
   [loaded]: (state, { payload }) => ({
    ...state,
    Loading: payload
  }),
}, defaultState)

export const callingApi = () => (dispatch) => {
  return fetch(Config.Apisever + '/api/getapi')
  .then(response => response.json())
  .then(json => {
    dispatch(added(json));
    dispatch(loaded('false'));
  })

    

 
  
}
