import React from 'react'
import { Carousel, Button } from 'react-bootstrap';

function HeaderSlider() {
  return (

    <>
        <Carousel variant="dark" >
            <Carousel.Item>
                <img className="d-block w-100"
                        style={{ height: "100vh", objectFit:"cover"}}
                        src="../img/slider/pure-pu-ladies-shoulder-bag.png"
                        alt="pure pu ladies bag"
                        />
                        <Carousel.Caption className="bg-white">
                            <h5>Summer Collection Pure Pu Ladies Shoulder Bag</h5>
                            <p> Excellent leather bag, as a model or any professional compared stylish bag</p>
                            <div className="mb-3">
                                <Button variant="dark">
                                    Shop Now
                                </Button>
                            </div>
                        </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100"
                        style={{ height: "100vh", objectFit:"cover"}}
                        src="../img/slider/blender-fruits-kitchen-space.png"
                        alt="pure pu ladies bag"
                        />
                        <Carousel.Caption className="bg-white">
                            <h5>Extra smooth blender for extra hot  @ home</h5>
                            <p> Blend your days with juicy and icy smoothie</p>
                            <div className="mb-3">
                                <Button variant="dark">
                                    Shop Now
                                </Button>
                            </div>
                        </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100"
                        style={{ height: "100vh", objectFit:"cover"}}
                        src="../img/slider/young-handsome-guy-smart-suit.png"
                        alt="pure pu ladies bag"
                        />
                        <Carousel.Caption className="bg-white" >
                            <h5 >Look smarter, Get suave</h5>
                            <p> You want to try professional dress get on board with team.</p>
                            <div className="mb-3">
                                <Button variant="dark">
                                    Shop Now
                                </Button>
                            </div>
                        </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    </>
  )
}

export default HeaderSlider