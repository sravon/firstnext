import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Axios from '../Axios/Axios'
import { useEffect,useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [users, setUsers] = useState([]);

  const gettSkills = () =>{
    Axios.get('users').then(response => {
        if(response.status == 200){
            console.log(response.data)
            setUsers(response.data)
        }else if(response.status == 201){
            console.log(response);
        }
    })
  }

  useEffect(() => {
      gettSkills()
  }, [])
  
  return (
    <>
      <Head>
             <title>Shrabon | Home</title>
      </Head>
      <div className="container mx-auto">
        <h2 className="p-10 text-center bg-gray-500 text-white">Home page</h2>
        <div className="grid md:grid-cols-3">
        {users?(users.map( (e,i) => (
          <div key={e.id} className="bg-gray-300 p-4 mr-2 mb-1">
            <h2 className="text-red-800 p-4">Name: {e.name}</h2>
            <h2 className="text-green-800 p-4">Email: {e.email}</h2>
            <Link href={"/"+e.id}><button className="bg-yellow-500 p-2 rounded float-right">View Details</button></Link>
          </div>  
        ))
        ): null}
        </div>
      </div>
    </>
  )
}
