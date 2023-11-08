import { Ejemploprops1, Ejemploprops2, Ejemploprops3 } from "../components/Props"
const nombre2=' pepe'
const frutas=['manzana', 'banana','paltas', 'sandia']
const verduras=['papa', 'zanahoria','acelga']

const Ejemplo1 = (props) =>{

    return(
        <div>
       <h2> Ejemplo de props </h2> 
       {/* propiedad simple y reutilizable*/}
       <Ejemploprops1 nombre =' Romina '/>
       <Ejemploprops1 nombre= {nombre2}/>
       {/*listado de elementos---11--pdf*/}
       <Ejemploprops2 elementos ={frutas}/> 
       <Ejemploprops2 elementos ={verduras}/> 
       <Ejemploprops3 titulo= "Futbol Messi" subtitulo ="Messi gano otra copa" cuerpo ="gdgfd"/> 

       </div>
    )

}
export default Ejemplo1;