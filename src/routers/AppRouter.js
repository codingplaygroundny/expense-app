import React from 'react';
import {BrowserRouter,Route,NavLink,Switch} from 'react-router-dom'

import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const Header=()=>(
    <div>
        <h1>Expensify</h1>
        <div>
            <NavLink to='/' className='isActiveLink' >Dashboard</NavLink>
            <NavLink to='/addexpense' className='isActiveLink' >Add</NavLink>
            <NavLink to="/editexpense/44" className='isActiveLink' >Edit</NavLink>
            <NavLink to='/help' className='isActiveLink' >Help</NavLink>
        </div>
    </div>
)

const Routes=()=>(
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path='/' component={ExpenseDashboardPage} exact={true}  />
            <Route path='/addexpense' component={AddExpensePage} />
            <Route path="/editexpense/:id" component={EditExpensePage} />
            <Route path='/help' component={HelpPage} />
            <Route  component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
)
 export default Routes;
// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// function ParamsExample() {
//   return (
//     <Router>
//       <div>
//         <h2>Accounts</h2>
//         <ul>
//           <li>
//             <Link to="/netflix">Netflix</Link>
//           </li>
//           <li>
//             <Link to="/h/zillow-group">Zillow Group</Link>
//           </li>
//           <li>
//             <Link to="/h/yahoo">Yahoo</Link>
//           </li>
//           <li>
//             <Link to="/h/modus-create">Modus Create</Link>
//           </li>
//         </ul>

//         <Route path="/h/:id" component={Child} />

//         {/*
//            It's possible to use regular expressions to control what param values should be matched.
//               * "/order/asc"  - matched
//               * "/order/desc" - matched
//               * "/order/foo"  - not matched
//         */}
//         <Route
//           path="/order/:direction(asc|desc)"
//           component={ComponentWithRegex}
//         />
//       </div>
//     </Router>
//   );
// }

// function Child(props) {
//   return (
//     <div>
//       <h3>ID: {props.match.params.id}</h3>
//     </div>
//   );
// }

// function ComponentWithRegex({ match }) {
//   return (
//     <div>
//       <h3>Only asc/desc are allowed: {match.params.direction}</h3>
//     </div>
//   );
// }

// export default ParamsExample ;