import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';


export default function(ComposedComponent) {
  class Authentication extends React.Component {

    componentWillMount() {
      if (this.props.token === undefined) {
        browserHistory.push('/signin');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  function mapStateToProps(state) {
    return { token: state.user.token };
  }

  return connect(mapStateToProps)(Authentication);
}