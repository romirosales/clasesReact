import '../css/mapa.css'

const Mapa=(props)=>{
    return(
        <div className="mapa">
            <h2>Ubicacion</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13136.874671156093!2d-58.43866960022627!3d-34.59863169999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb2e1493a6a3%3A0x1862a7c0b8163e5d!2sUTN.BA!5e0!3m2!1ses!2sar!4v1699877572818!5m2!1ses!2sar" style={{width:600 ,height:450, border:0, loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}
             ></iframe>
        </div>
    )
}
export default Mapa;