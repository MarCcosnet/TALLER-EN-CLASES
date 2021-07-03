{/* import { useState } from "react"

const Navbar = () => {
    const [user, setUser] = useState(null)

    const login = () => {
      setUser({id:1,nombre:"Marcos"})
    }
    const logout = () => {
      setUser(null)
    }
    return (
       <nav className="navbar navbar-expand-lg navbar-light bg-secondary bg-gradient">
        <div className="container-fluid  text-white ">
          <span>Usuario: {user? user.nombre : "Desconocido"}</span>
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white-50" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Citas
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">1er Usuario</a></li>
                  <li><hr className="dropdown-divider"></hr></li>
                  <li><a className="dropdown-item" href="#">Marcos</a></li>
                  <li><hr className="dropdown-divider"></hr></li>
                  <li><a className="dropdown-item" href="#">3er Usuario</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-dark  text-white" type="submit">Buscar</button>
            </form>
            
            {user 
                ? (<button 
                      className="btn btn-outline-dark text-white" 
                      type="Button" 
                      onClick = {logout} >Cerrar Sesion 
              </button>)
                : (<button 
                      className="btn btn-outline-dark  text-white" 
                      type="Button" 
                      onClick = {login} >Iniciar Sesion
              </button>)
            }
          </div>
        </div>
          </nav> 

    )
} */}



const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
        <div className="container-fluid ">
         <div class="position-absolute top-50 start-50 translate-middle">
         <span class="navbar-brand mb-1 h1">TALLER DE POO ISMAEL CUADRADO {props.name}</span>
            </div>
            </div>
      </nav> 
  )
}
export default Navbar 