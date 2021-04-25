import{ actions, reducer} from './test.module';


describe('app.module -> challenge', () => {
    it('should set the action for setSelectedItem',()  => {

        expect(
            reducer({},actions.test.setSelectedItem(1))
        ).toEqual({selectedItem: 1});
    });
    it('should set the action for setSignOut',()  => {

        expect(
            reducer({},actions.test.setSignOut(true))
        ).toEqual({isSignedOut: true});
    });
    it('should set the action for setItems',()  => {

        expect(
            reducer({},actions.test.setItems([{label: 'test'}]))
        ).toEqual({listItems: [{"label": "test"}]});
    });
});
