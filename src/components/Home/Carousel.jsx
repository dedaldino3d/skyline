import React from 'react'
import { Carousel } from 'antd'


const CarouselContainer = props => {
    return (
        <div>
        <Carousel
        bordered={false}
        >
            <div>
                <img src={require("../../images/Bigstock.jpg")} alt="bit stock"/>
            </div>
            <div>
                <img src={require("../../images/Bigstock.jpg")} alt="bit stock"/>
            </div>
            <div>
                <img src={require("../../images/Bigstock.jpg")} alt="bit stock"/>
            </div>
            <div>
                <img src={require("../../images/Bigstock.jpg")} alt="bit stock"/>
            </div>
        </Carousel>
        </div>
    )
}
export default CarouselContainer