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
        <div>
            <h4>{titulo}</h4>
            <h5>{subtitulo}</h5>
            <p>{cuerpo}</p>


        </div>
    )
}




export {
    Ejemploprops1,
    Ejemploprops2,
    Ejemploprops3
}