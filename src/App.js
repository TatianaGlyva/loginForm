import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import React from "react";
import PropTypes from 'prop-types';


function App(props) {
  return (
    <div className='App'>
      <Header/>
      <Main dataContent={props.dataContent}/>
    </div>
  );
}

export default App;

App.propTypes = {
    dataContent: PropTypes.array
};
