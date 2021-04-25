import { createActions, handleActions} from 'redux-actions';

export const actions = createActions({
  
    test:{
        SET_SELECTED_ITEM: action => action,
        SET_SIGN_OUT: action => action,
        SET_ITEMS: action => action

    },
   
});

export const reducer = handleActions(
  {
    [actions.test.setSelectedItem]:(state,action) =>({
          ...state,
          selectedItem: action.payload,
    }),
    [actions.test.setSignOut]:(state,action) =>({
        ...state,
        isSignedOut: action.payload,
    }),
    [actions.test.setItems]:(state,action) =>{
      return {
        ...state,
        listItems: action.payload
      }
    }
  },
  {
       selectedItem: 0,
       isSignedOut: false,
       listItems:[]
  }
);