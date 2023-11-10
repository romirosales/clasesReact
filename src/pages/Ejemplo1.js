import { Ejemploprops1, Ejemploprops2, Ejemploprops3, Ejemploprops4, Ejemploprops5 } from "../components/Props"
const nombre2=' pepe'
const frutas=['manzana', 'banana','paltas', 'sandia']
const verduras=['papa', 'zanahoria','acelga']
const mostrarValor=valor=>{
    console.log(valor)
}

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
       {/*multiples propiedades y destructuring */}
       <h4>ejemplo de modelo de noticia</h4>
       <Ejemploprops3 titulo= "Futbol Messi" subtitulo ="Messi gano otra copa" cuerpo ="gdgfd"/> 
       {/*Este componente Ejemploprops4 si o si necesita pasarle en este caso mostrarValor */}
       <Ejemploprops4 cambiarValor={mostrarValor}/>
        {/*si lo recibo asi sin el amnejador cuando lo completo me va a tirar error */}
       <Ejemploprops4/>
       {/*pasamos una funcion vacia */}
       <Ejemploprops4 cambiarValor={()=>{}}/>
       <Ejemploprops5/>
       <Ejemploprops5 EventoClick={mostrarValor}/>

       </div>
    )

}
export default Ejemplo1;