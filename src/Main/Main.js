import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
function Main(){
    const [ users, setUsers ] = useState([]);
    const [ name, setName ] = useState('')
    const [ age, setAge ] = useState(0);
    const usersCollectionRef = collection(db, "users");

    const createUser = async () => {
        console.log("Adding a new user: ", name, age )
        await addDoc(usersCollectionRef, {name: name, age: Number(age)});
    }
    const deleteUser = async (id) => {
        console.log("Deleting user")
        const userDoc = doc(db, "users", id)
        await deleteDoc(userDoc);

    }
    const updateAge = async (id, age ) => {
        console.log('Increasing age by 1')
        const newFields = { age: age + 1}
        const userDoc = doc(db, "users", id)
        await updateDoc( userDoc ,newFields)
    }

    useEffect(() => {

         const getUsers = async () => {
            const data = await getDocs(usersCollectionRef)
            console.log("What data are we expecting from the DB: ", data);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            
         }
         getUsers()
         
    }, [])

    return(
        <>
        <div>
            <input placeholder="name" size={"10px"} onChange={(e)=>{setName(e.target.value)}}/>
            <input placeholder="age" size={"5px"} type="number" onChange={(e)=>{setAge(e.target.value)}}/>
            <button onClick={createUser}>Create User</button>
            {users.map((user) => {
                return(
                <div>
                {" "}
                <h1>Name: {user.name}</h1>
                <h1>Age: {user.age} </h1>
                    <div>
                        <button onClick={() => {deleteUser(user.id)}}>Delete</button>
                        <button onClick={() => {updateAge(user.id, user.age)} }>Increase Age</button>
                    </div>
                </div>
            )})}
        </div>    
        </>
    )
}

export default Main;