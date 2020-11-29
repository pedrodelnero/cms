import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import axios from 'axios';

const Layout = ({ children, id= "3" }) => {
  const [siteName, setSiteName] = useState('')

  // Grabbing site by ID => will need to change once further along in the project

  useEffect(() => {
    axios.get(`http://localhost:5000/sites/${id}`).then(res => setSiteName(res.data)).catch(err => console.log(err))
  }, [])

  console.log('NAME', siteName)
  return (
    <div>
      <Head>
        <title>Hello</title>
        <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
      </Head>
      <Navbar/>
      <div className="container">
        {children}
      </div>
    </div>
  )
};

export default Layout;