import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
    App,
    Home,
    Blog,
    BlogDetail,
    Case,
    CaseDetail,
    Product,
    About,
    Recruitment,
    NotFound,
  } from 'containers';

export default () => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Home}/>

      { /* Routes */ }
      <Route path="about" component={About}/>
      <Route path="Recruitment" component={Recruitment}/>
      <Route path="Blog" component={Blog}/>
      <Route path="Product" component={Product}/>
      <Route path="/BlogDetail/:bid" component={BlogDetail}/>
      <Route path="Case" component={Case}/>
      <Route path="/CaseDetail/:cid" component={CaseDetail}/>
      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
