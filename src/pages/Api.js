import '../css/api.css'
import { useEffect, useState } from 'react'; //hook


const Api =props =>{
    const [cargando, setCargando] =useState(false);//cargando es una variable y setCargando es una funcion que modifica los datos de cargando
    const [personajes, setPersonajes]=useState([]);

    useEffect(()=>{
        const cargarDatos =async()=>{
            setCargando(true);
            const res=(await fetch('https://rickandmortyapi.com/api/character')).json();
            setPersonajes(res.results);
            setCargando(false);
        }
        cargarDatos();
    },[]);
    



    return(
        <>
        <h2>Datos Api</h2>
        {cargando ? <p>cargando datos...</p> :( 
        <div className="personajes">
           
            <div className="personaje">
                <h4>Nombre del personaje</h4>
                <div className="ficha">
                    <div className="foto">
                        <img src= "https://fakeimg.pl/100x100" alt=""/>

                    </div>
                    <div className="datos">
                        <h6>Especie: Humano</h6>
                        <h6>Vivo: Si o No</h6>

                    </div>

                </div>

            </div>
           

        </div>
        )}

        </>
    )
}
export default Api;