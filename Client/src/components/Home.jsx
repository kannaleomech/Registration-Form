import {Link} from 'react-router-dom'

export default function Home(){
    return(
        <div >
          <h3 >Welcome Home</h3>
          <Link to='/login'>Login</Link>
        </div>
    )
}