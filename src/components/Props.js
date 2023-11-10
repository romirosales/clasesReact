const Ejemploprops1 = props =>{

    return (<h3>Hola{props.nombre}</h3>)
}

const Ejemploprops2 = props =>{

    const {elementos}= props;
    return(
    <ul>
    {elementos.map(elemento => <li key={elemento}>{elemento}</li>)}
    </ul>
    )
}

const Ejemploprops3 =({titulo,subtitulo,cuerpo})=>{
    return(
        <div className="caja">
            <h4>{titulo}</h4>
            <h5>{subtitulo}</h5>
            <p>{cuerpo}</p>


        </div>
    )
}
const Ejemploprops4= props => {

    //cuando se produzca el evento onChange en el input
    //ejecuto la funcion anonima que llama a la funcion
    //que enviamos en la props cambiar valor
    return <label>ver en consola: <input type="text" onChange={(e)=>props.cambiarValor(e.target.value)}/></label>
}
const Ejemploprops5=props=>{
    //defino la funcion que va a manejar el evento click
    const handleClick=e=>{
        //valido que esten pasando las props que necesito
        // si se da la condicion o la pasaron> va  a mostrar me clickeaste
        //sino nada o no se va a romper
        //porque en este caso el control esta adentro de la funcion
        if(props.EventoClick){
            props.EventoClick('me clickeaste')
        }
    }
    return (
        <p><button onClick={handleClick}>clikeame !</button></p>
    )
}




export {
    Ejemploprops1,
    Ejemploprops2,
    Ejemploprops3, 
    Ejemploprops4, 
    Ejemploprops5
}