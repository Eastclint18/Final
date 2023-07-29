import {auth, googleProvider} from '../config/firebase';
import {useState} from 'react';
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';


function Auth (){
const [email , setEmail] = useState('');
const [password , setPassword] = useState('')

const signIn = async () =>{
          await createUserWithEmailAndPassword(auth,email, password)
}

const signInWithGoogle = async () =>{
          await signInWithPopup(auth,googleProvider)
}
const logOut = async () =>{
          await signOut(auth)
}
          return (
                    <div>
                              <span>Usuario:{auth?.currentUser?.email}</span>
                              <input placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                              <input placeholder='Password'  type= 'password' onChange={(e) => setPassword(e.target.value)}/>
                              <button onClick = {signIn}>Log In</button>
                              <button onClick = {signInWithGoogle}>Ingresa con Google</button>
                              <button onClick = {logOut}>Cerrar Sesion </button>
                    </div>
          )
}

export default Auth;