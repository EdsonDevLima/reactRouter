interface PropsForm{
  user:(data:string)=>void
  password:(data:string)=>void
  confirmPassword?:(data:string)=>void
}
const Form = ({user,password,confirmPassword}:PropsForm)=>{
  return(
  <>
  <form>
    <label>
      Usuario:
      <input type="text" onChange={(e)=>{user(e.target.value)}} />
    </label>
    <label>
      Senha:
      <input type="text" onChange={(e)=>{password(e.target.value)}} />
    </label>
    {confirmPassword &&  
    <label>
      Confirmaçao de senha:
      <input type="text" onChange={(e)=>{confirmPassword(e.target.value)}} />
    </label> 
    }
      <input type="submit" value={confirmPassword ? "Cria usuario" :"Login"}/>
  </form>
    </>)
}
export default Form