import React from 'react'
import { Redirect } from 'react-router-dom'

class ProtectedRoute extends React.Component {
    render() {
        const Component = this.props.component;
        const isSetUser= localStorage.getItem('user');      
        return isSetUser ? (
            <Component />
        ) : (
            <Redirect to="/"/>
        );
    }
}
export default ProtectedRoute;
