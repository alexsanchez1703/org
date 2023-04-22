import {useState} from "react"
import "./MiOrg.css"

const MiOrg = (props) => {

    //const [mostar,actualizarMostrar] = useState(true)
    //const manejarClick = () => {
      //  console.log("Mostrar/ocultar", !mostar)
      //  actualizarMostrar(!mostar)
    //}
    return <section className="orgSection">
        <h3 className="tittle">Mi organización</h3>
        <img src="/img/Add.png" alt="Add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg;