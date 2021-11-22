import { useEffect,useState } from 'react'
import { useRouter } from 'next/router';
import Axios from '../Axios/Axios';
import Head from 'next/head';

export default function Details() {
    const router = useRouter()
    const [users, setUsers] = useState([]);
    const {id} = router.query
    
    const gettSkills = () =>{
        Axios.get('users/' + id).then(response => {
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
        
    }, [id])

    return (
        <>
            <Head>
                 <title>{users.name}</title>
            </Head>
            <div className="container w-1/2 mx-auto">
                <div className="bg-gray-300 p-4 mr-2 mb-1 mx-auto w-full">
                    <h2 className="text-red-800 p-4">Name: {users.name}</h2>
                    <h2 className="text-green-800 p-4">Email: {users.email}</h2>
                    <h2 className="text-red-800 p-4">Username: {users.username}</h2>
                    <h2 className="text-green-800 p-4">phone: {users.phone}</h2>
                    <h2 className="text-red-800 p-4">Website: {users.website}</h2>
                    <h2 className="text-green-800 p-4">Email: {users.email}</h2>
                </div>
            </div>
        </>
    )
}
