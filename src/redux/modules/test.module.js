import { createActions, handleActions} from 'redux-actions';

export const actions = createActions({
  
    challenge:{
        SET_SELECTED_ITEM: action => action,
        SET_SIGN_OUT: action => action,
        SET_ITEMS: action => action

    },
   
});

export const reducer = handleActions(
  {
    [actions.challenge.setSelectedItem]:(state,action) =>({
          ...state,
          selectedItem: action.payload,
    }),
    [actions.challenge.setSignOut]:(state,action) =>({
        ...state,
        isSignedOut: action.payload,
    }),
    [actions.challenge.setItems]:(state,action) =>({
    
        ...state,
        listItems: action.payload,
    }),
  },
  {
       selectedItem: 0,
       isSignedOut: false,
       listItems:[]
  }
);