import Form from "../../components/form"
import {useState} from "react"
const Home = ()=>{
  const [user,setUser] = useState<string>("")
  const [password,setPassword] = useState<string>("")
  const [confirmPassword,setConfirmPassword] = useState<string>("")
  const [isRegister , setIsRegiter] = useState<boolean>(true)
  console.log(user,password,confirmPassword,isRegister)
  return(<div>
    {isRegister ? <Form user={setUser} password={setPassword} /> : <Form user={setUser} password={setPassword} confirmPassword={setConfirmPassword}/>}
    <a href="#" onClick={(e)=>{e.preventDefault(); setIsRegiter(!isRegister)}} >{isRegister ? "Nao possuo conta" : "Ja sou cadastrado"}</a>
  </div>)
}
export default Home