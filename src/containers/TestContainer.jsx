import React from 'react';
import PropTypes from 'prop-types';
import { compose} from 'recompose';
import { connect } from 'react-redux';
import { actions } from '../redux/modules/test.module'
import { getSelectedItem, getListItems} from '../redux/selectors/uiSelector';
import { TestComponent, LogOut} from '../components';

export class TestContainer extends React.Component{

    static propTypes = {
     
        selectedItem: PropTypes.number.isRequired,
        listItems: PropTypes.arrayOf(PropTypes.shape()).isRequired,
        setItems: PropTypes.arrayOf(PropTypes.shape()).isRequired,
        setSelectedItem: PropTypes.func.isRequired
    }

    componentDidMount() {
        const { setSelectedItem} = this.props;
        var modifiedList = [{'label':'Test User'}];

        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                data.map(function(item){
                    modifiedList.push({label: item.name});
                })
                console.log('modifiedList',modifiedList);
                setSelectedItem(modifiedList);
            })
            .catch(console.log)

            console.log('modifiedList*****',modifiedList);

            setSelectedItem(modifiedList);

    }

    static defaultProps ={
        setSelectedItem: () =>{},
        setItems:() =>{},
        listItems:[{label:'Test 1'},{label:'Test 2'}]
    }

    render(){
        const {listItems} = this.props;
        return (
            <div>
              <TestComponent listItems={listItems} title="Test Component Title"></TestComponent>
            </div>
          );
    }

   
}
const mapStateToProps = state => ({
    listItems: getListItems(state),
    selectedItem: getSelectedItem(state),
})

const mapDispatchToProps = {
    setSelectedItem: actions.challenge.setSelectedItem,
    setItems: actions.challenge.setItems,

};

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps)
)

export default enhance(TestContainer);