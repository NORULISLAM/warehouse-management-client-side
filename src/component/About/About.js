import React from 'react';
import { Card } from 'react-bootstrap';

const About = () => {
    return (
        <div className='m-5 p-5 mx-auto'>
            <h1>This is About</h1>
            <Card>
                <Card.Img variant="top" src="https://scontent.fkix1-1.fna.fbcdn.net/v/t39.30808-6/245899567_3039944652946609_6141097155470346848_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ZkDgYnyah7oAX_zMim8&_nc_ht=scontent.fkix1-1.fna&oh=00_AT8xIuuzfNXRij3HB2Bb7CiliTCXPwQmRQizno4Rs2ZHQg&oe=6261DE96" />
                <Card.Body>
                    <Card.Text>
                        NAME: NORUL ISLAM JEWEL

                    </Card.Text>
                </Card.Body>
            </Card>


        </div>
    );
};

export default About;