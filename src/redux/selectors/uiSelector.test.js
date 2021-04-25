import { getChallenge,getSignedOut,  getUiSelector,getSelectedItem, getListItems} from './uiSelector';

describe('ui list selector', () =>{

    it('should return null if state is null',()=>{
        const state = null;
        expect(getUiSelector(state)).toBeNull();

    })
    it('should return null if ui slice is present',()=>{
        const state ={
            ui:{
               
            }
        }
        expect(getUiSelector(state)).not.toBeNull();
    })


})

describe('challenge selector',()=> {

    it('should return null if state is null',() =>{

        const state ={
            ui:{
             
            }
        };
        expect(getChallenge(state)).toBeNull();
    })
});

describe('get selected item selector',() =>{

    
    it('should return passed value',()=>{
        const state ={
            ui:{
                challenge:{
                    selectedItem: 2
                }
            }
        }
        expect(getSelectedItem(state)).toEqual(2)
    })
});
describe('get Signed out selector',() =>{

    
    it('should return passed value',()=>{
        const state ={
            ui:{
                challenge:{
                    isSignedOut: true
                }
            }
        }
        expect(getSignedOut(state)).toEqual(true)
    })
});
describe('get List Items selector',() =>{

    
    it('should return passed value',()=>{
        const state ={
            ui:{
                challenge:{
                    listItems: [{label: 'test'}]
                }
            }
        }
        expect(getListItems(state)).toEqual([{label: 'test'}])
    })
});