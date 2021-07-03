import Tarjeta  from "./Tarjeta"
import Calculadora from "./Calculadora"
import celebridades from '../../helpers//usuario'

const ListCards = () => {
    console.log(celebridades[0].name.last)
    return (
        <div>        
        <div className="container">
            <div className="row">
            <div className="col-md-5" >  
                    <Calculadora/>
                </div>
            {celebridades.map(user =>(    
                
                <div className="col-md-5" key={user.login.wid}>
                    <Tarjeta  user={user}/> 
                </div>
            ))}
            </div>
        </div>
    </div>
    )
}

export default ListCards

