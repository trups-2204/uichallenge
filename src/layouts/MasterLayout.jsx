import React from 'react';
import { compose } from'recompose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actions} from '../redux/modules/test.module';
import PageHeader from '../components/common/Header';
import PageFooter from '../components/common/Footer';
import { PageWrapper, PagePanel} from '../components/common/styles';
import { getSignedOut} from '../redux/selectors/uiSelector';

 class MasterLayout extends React.Component{

    static propTypes ={
        children: PropTypes.node.isRequired,
        setSignOut: PropTypes.func.isRequired,
        isSignedOut: PropTypes.bool.isRequired,
    };

    onSignout = () =>{    
      const { isSignedOut, setSignOut} = this.props;
      setSignOut(!isSignedOut);
    };
    render(){
        const { children, isSignedOut }= this.props;
      
        return(
            <PageWrapper>
                <PagePanel>
                    <PageHeader headerTitle="Dashboard" onSignOut = {this.onSignout} />
                    <>
                    {children}
                    </>
                <PageFooter/>
                </PagePanel>
            </PageWrapper>
        );
    }

   


}

const mapStateToProps = state => ({
    isSignedOut: getSignedOut(state),
});

const mapDispatchToProps ={
    setSignOut: actions.test.setSignOut,
};

const enhance = compose ( connect(mapStateToProps, mapDispatchToProps));

export default enhance(MasterLayout);

