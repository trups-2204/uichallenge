import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const TestPanel = styled.div`
   border:  solid #ccc;
   border-width: 1px 1px 1px 1px;
   width: 500px;
   height: 500px;
   margin-left: 20px;
`;

export const TestComponent =({
    title, listItems, onButtonClick
})=>(
   <TestPanel>
                     <h4>{title}</h4>

             {listItems.map((item,index) => {
               
            return (
           
             <div key={index}>{item.label}</div>
            
            );
          })}
                     <button onClick={onButtonClick}>Test</button>

   </TestPanel>
   
);

TestComponent.propTypes ={
    listItems: PropTypes.instanceOf(Array).isRequired,
    title: PropTypes.string.isRequired,
    onButtonClick: PropTypes.func.isRequired,
  
};

export default TestComponent;