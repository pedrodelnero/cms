import Link from 'next/link';
import axios from 'axios';


const Navbar = () => {
  // const [siteName, setSiteName] = useState('')

  // useEffect(() => {
  //   axios.get('http://localhost:5000/site').then(res => setSiteName(res.data)).catch(err => console.log(err))
  // }, [])
  
  return (
  <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
    <div className="container">
      <a className="navbar-brand" href="/">Pedro's Blog</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/"><a className="nav-link">Home</a></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)};

export default Navbar;