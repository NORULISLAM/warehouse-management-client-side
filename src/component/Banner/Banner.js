import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU'
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>CodeSandbox</h1>
                    <p>Free, instant,collabroative sandboxex</p>
                    <p>for rapid warhouse</p>
                    <Button variant="light">Learn More</Button>{' '}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1>CodeSandbox</h1>
                    <p>Free, instant,collabroative sandboxex</p>
                    <p>for rapid warhouse</p>
                    <Button variant="light">Learn More</Button>{' '}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1>CodeSandbox</h1>
                    <p>Free, instant,collabroative sandboxex</p>
                    <p>for rapid warhouse</p>
                    <Button variant="light">Learn More</Button>{' '}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;