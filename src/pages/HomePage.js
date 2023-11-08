import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import '../css/home.css'

const HomePage =(props) =>{

    const settings ={
        arrows:false,
        infinite:true,
        speed:1000,
        autoplaySpeed:2000,
        fade:true,
        autoplay:true


    };

    return (
        <div className= "galeria"> 
        <Slider {...settings}>
        <img src="images/img01.jpg" alt="imagen 01"/>
        <img src="images/img02.jpg" alt="imagen 01"/>
        <img src="images/img03.jpg" alt="imagen 01"/>
        <img src="images/img04.jpg" alt="imagen 01"/>
        <img src="images/img05.jpg" alt="imagen 01"/>
        </Slider>

        </div>
    )
}
export default HomePage