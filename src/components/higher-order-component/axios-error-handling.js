import React, {Component,Fragment} from 'react';
import axios,{interceptors} from 'axios';

const axiosErrorHandling = (WrappedComponent,axios) => {

  class withError extends React.Component {

  	componentDidMount() {

		axios.interceptors.request.use(function (request) 
		{

	    	return request;
	  	}, 
	  	function (error) {
	    	return Promise.reject(error);
	  	});


		axios.interceptors.response.use(function (response) {
		  return response;
		}, 
		function (error) {
			
		  return Promise.reject(error);
		});

  	}

    render() {
      return (
      		<Fragment>
      			<WrappedComponent />
      		</Fragment>
      		)
      	;
    }
  }
  return withError;
};

export default axiosErrorHandling;