import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import EmpList from './EmpList';
import EmpDetails from './EmpDetails';
//import Home from './Home';
class RouterConf extends Component {
  state = { data: [] }

  render() {
    return (
      <Switch>
        <Route path='/emp-details' component={EmpDetails}></Route>
        <Route path='/' component={EmpList}></Route>
        {/* <Route path='/' component={Home}></Route> */}
      </Switch>
    );
  }
}
export default RouterConf;