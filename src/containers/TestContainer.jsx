import React from 'react';
import PropTypes from 'prop-types';
import { compose} from 'recompose';
import { connect } from 'react-redux';
import { actions } from '../redux/modules/test.module'
import { getSelectedItem, getListItems} from '../redux/selectors/uiSelector';
import {TestComponent} from '../components';

export class TestContainer extends React.Component{

    static propTypes = {
        selectedItem: PropTypes.number.isRequired,
        listItems: PropTypes.arrayOf(PropTypes.shape()).isRequired,
        setItems: PropTypes.arrayOf(PropTypes.shape()).isRequired,
        setSelectedItem: PropTypes.func.isRequired
    }

    static defaultProps ={
        setSelectedItem: () =>{},
        setItems:() =>{},
        listItems:[]
    }

    onButtonClick =()=>{
        const { setSelectedItem,  setItems} = this.props;
        setSelectedItem(4);
        var modifiedList = [];

        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                data.map(function(item){
                    modifiedList.push({label: item.name});
                })
                console.log('modifiedList',modifiedList);
                setItems(modifiedList);
            })
            .catch(console.log)
    }
    componentDidMount() {
        


    }

    render(){

      const {listItems}= this.props;
        return (
            <div>
            <TestComponent listItems={listItems} title="Test Component Title" onButtonClick={this.onButtonClick}></TestComponent>
          </div>
          );
    }

   
}
const mapStateToProps = state => ({
    
    listItems: getListItems(state),
    selectedItem: getSelectedItem(state),

})

const mapDispatchToProps = {
    setSelectedItem: actions.test.setSelectedItem,
    setItems: actions.test.setItems,

};

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps)
)

export default enhance(TestContainer);