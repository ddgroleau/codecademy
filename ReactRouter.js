import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';

//In the app.js file
<Switch>
 <Route path="/" exact component={Home}/> 
 <Route path="/path" component={YourComponent} />
 <Route path="/path/:id" exact component={pathId} />
</Switch>

//in Navbar
<nav>
    <ul>
        <Link to="/path">
            <li key={path.id}>Path</li>
        </Link>
    </ul>
</nav>

//props from Link
function PathId({match}) {
    useEffect(() => {
        fetchId();
    }, []);

const [id, setId] = useState({});

const fetchId = async () => {
    const fetchItem  = await fetch(`"https://url/${match.params.id}`);
    const id = await fetchItem.json();
    setId(id);
}

return (
    <div>
        <h1>{id.name}</h1>
    </div>
);
}