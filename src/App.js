import React from 'react';
import {Switch} from 'react-router-dom';

import './assets/styles/app.css';
import Layout from "./hoc/layout/Layout";

const App = () =>{

  let routes = (
      <Switch>
        {/*display your routes here !*/}

        {/*<Route exact path="/login" component={SingIn} />*/}
        {/*<Route exact path="/register" component={Register} />*/}
        {/*<Redirect to="/login" />*/}
      </Switch>
  );

  return (
      <Layout>
          {routes}
      </Layout>
  );
};

export default App;
