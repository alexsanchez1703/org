import Colaborador from "../Colaborador";
import "./Equipo.css"
import hexToRgba from 'hex-to-rgba';
const Equipo  = (props) => {
    const { colorPrimario,colorSecundario,titulo, id} = props.datos;
    const {colaboradores, eliminarColaborador, actualizarColor,like} = props;
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }
    const colorTitulo = {
        borderColor:colorPrimario
    }
    return <>
        { colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <input
                    type="color"
                    className="eliminar-color"
                    value={colorPrimario}
                    onChange={(e)=>{
                        actualizarColor(e.target.value,id)
                    }}
                />
                    <h3 style={colorTitulo}>{titulo}</h3>
                    <div className="colaboradores">
                        {
                            colaboradores.map((colaborador,index) => <Colaborador 
                            datos={colaborador} 
                            key={index} 
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                            />)
                        }
                    </div>
            </section>
        }
    </>
}
export default Equipo;