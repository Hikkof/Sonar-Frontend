import { Products } from './components/Products.jsx';
import { Users } from './components/Users.jsx';


function App() {
    return (
        <div>
            <a href="http://localhost:8080/products"><Products/></a>
            <a href="http://localhost:8080/users"><Users/></a>
        </div>
    );
}

export default App;