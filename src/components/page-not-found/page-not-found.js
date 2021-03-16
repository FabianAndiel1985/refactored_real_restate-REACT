import React from 'react';


function PageNotFound(props) {
  return (<div><h1>Page not found</h1>
  		<button onClick={props.history.goBack}> go back </button></div>)
}

export default PageNotFound;