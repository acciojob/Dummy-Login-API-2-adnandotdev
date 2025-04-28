import {React, useState, useEffect} from 'react'

export default function App(){
  const [checked, setChecked] = useState(false)
  const [user, setUser] = useState(false)
  const [pass, setPass] = useState(false)
  const preDefinedUsers = [
    { id: 1, name: "ABC", email: "abc@gmail.com", password: "12" },
    { id: 2, name: "DEF", email: "def@gmail.com", password: "1234" },
    { id: 3, name: "GHI", email: "ghi@gmail.com", password: "123456" }
  ];

  function handleSubmit(e){
    setChecked(false)
    setUser(false)
    setPass(false)
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    const userData = preDefinedUsers.find(user => user.email === email)
    setTimeout(() => {
      setChecked(true)
      if(userData)
      {
        setUser(true)
        if(password === userData.password){
          setPass(true)
        }
      }
    }, 3000)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="" >
        Email:
        <input required name='email' id="input-email" type="email" />
      </label>
      <label htmlFor="">
        Password:
        <input required name='password' id="input-password" type="password" />
      </label>
      <button
      id="submit-form-btn" 
      type="submit"
      >Submit</button>
    </form>
    <div>
      {checked &&
      (user ? (
        pass ? <h2>User Loggedin</h2> : <h2 id="password-error">Password Incorrect</h2>
      ) : (
        <h2 id="user-error">User not found</h2>
      )
    )
       }
    </div>
    </>
  )
}
