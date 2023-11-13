import alumnos from '../data/alumnos.json'

const Json = props=> {
    return (
        <>
        <h2> carga de datos json</h2>
        <ul>
            {alumnos.map(alumno=>(
                <li>Nombre: {alumno.nombre} apellido: {alumno.apellido} Edad ({alumno.edad})</li>
            ))}
        </ul>

        </>
    )
}
export default Json;