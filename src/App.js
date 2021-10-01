import { lazy, Suspense } from 'react';
import { Switch, Route, Link} from 'react-router-dom'

const Home = lazy(() => import('./components/home'))
const Todo = lazy(()=> import('./components/todo/todo'))
const FormImage = lazy(()=> import('./components/form/form'))


function App() {
  return (
    <div className="App">
      <div>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/todolist">TodoList</Link></li>
        <li><Link to="/imageform">Image Form</Link></li>
        </ul>
      </div>
      <Switch>
        <Suspense fallback="loading....">
        <Route exact path="/" component={Home}/>
        <Route exact path="/todolist" component={Todo}/>
        <Route exact path="/imageform" component={FormImage}/>
        </Suspense>
        <Route path="*" component={() => '404 page not found'}/>
        </Switch>
    </div>
  );
}

export default App;
