import {useForm} from "../hooks/useForm.js";

export const SimpleFormCustomHook = () => {
  const {onInputChange, onResetForm, username, email, password} = useForm({
    username: "",
    email: "",
    password: ""
  })

  return (
    <>
      <h1>Formulario With Custom Hook</h1>
      <hr/>
      <input
        type="text"
        className={"form-control"}
        placeholder={"Username"}
        name={"username"}
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className={"form-control mt-2"}
        placeholder={"Email"}
        name={"email"}
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className={"form-control mt-2"}
        placeholder={"Contraseña"}
        name={"password"}
        value={password}
        onChange={onInputChange}
      />

      <button
        onClick={onResetForm}
        className={"btn btn-primary mt-2"}
      >Borrar
      </button>
    </>
  )
}