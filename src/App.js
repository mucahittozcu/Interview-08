import React, { useState } from "react";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: 20
      }}
    >
      <ValidatedForm />
    </div>
  );
}

const ValidatedForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accounts, setAccounts] = useState([
    { username: "NamıkKorona1", password: "1234567" }
  ]);

  const onSubmit = (e) => {
   e.preventDefault()
   const accountsFind = accounts.find((account) => (
    username === account.username && password === account.password
   )) 
   if(accountsFind){
    alert(`Log in başarılı,selam ${username}`)
    setUsername("")
    setPassword("")
   }
   else if (username.length > 6 && password.length > 6){
     setAccounts((pre) => [
      ...pre,
   { username: username, password: password }
   ])
   alert(`Yeni hesap oluşturuldu,merhaba ${username}`)
   setUsername("")
   setPassword("")
   }
   else if (username.length < 6 && password.length < 6){
    alert(`Username ve password ,6 karakterden uzun olmalıdır.`)
   }
  };
const handleUserNameChange = (event) => {
  setUsername(event.target.value)
  if (username.length > 21){
    alert(`Username 20 karakteri geçemez.`)  
    setUsername("")
   }
}
const handlePasswordChange = (event) => {
  setPassword(event.target.value)
  if (password.length > 21){
    alert(`Username 20 karakteri geçemez.`)  
    setPassword("") 
  }
}
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        border: "solid",
        padding: 20,
        paddingBottom:15,
        paddingTop:30
      }}
      onSubmit={onSubmit}
    >
      <h3 className="text-xl font-semibold mb-2">Login</h3>
      <input
      className="border-2 border-slate-950 rounded"
        value={username}
        type="text"
        onChange={handleUserNameChange}
        style={{ marginBottom: 5 }}
      />
      <input
      className="border-2 border-slate-950 rounded"
        value={password}
        type="text"
        onChange={handlePasswordChange}
        style={{ marginBottom: 10 }}
      />
      <button className="border-2 font-semibold pl-2 pr-2 border-slate-400 rounded" style={{ alignSelf: "center" }} onClick={onSubmit}>
        Submit
      </button>
    </form>
  );
};

export default App;
