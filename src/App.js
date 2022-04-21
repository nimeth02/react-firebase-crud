
import './App.css';
import { db } from "./firebase.config";
import { collection,  getDocs, addDoc, updateDoc, deleteDoc,  doc} from "firebase/firestore";
import { useEffect, useState } from 'react';
function App() {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const usersCollectionRef=collection(db,"users")

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
  };
  const updateUser = async (id,age) => {
    const userdoc=doc(usersCollectionRef,id)
   const up= await updateDoc(doc(usersCollectionRef,id),{age:age+1})
   console.log('up',up);
  };
  const deleteUser = async (id) => {
    const userdoc=await doc(usersCollectionRef,id)
    await deleteDoc(userdoc)
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data);
     // setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
     setUsers(data.docs.map((doc)=> ({...doc.data(),id :doc.id})))
    };

    getUsers();
  }, []);
console.log(users);
  return (
    <div className="App">
  <input
        placeholder="Name..."
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Age..."
        onChange={(event) => {
          setNewAge(event.target.value);
        }}
      />
      <button onClick={createUser}> Create User</button>
  {users && users.map((user) => {
        return (
          <div key={user.id}>
           
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <button
              onClick={() => {
                updateUser(user.id, user.age);
              }}
            >
              {" "}
              Increase Age
            </button>
            <button
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              {" "}
              Delete User
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
