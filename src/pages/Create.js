import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeaderImg from "../assets/images/HeaderImg.png"
import Button from 'react-bootstrap/Button';
import { FaCalendarAlt, FaChevronRight, FaLink } from 'react-icons/fa';
import {IoLocationOutline} from 'react-icons/io5'
import { useMediaQuery } from 'react-responsive';
import Form from 'react-bootstrap/Form';

import DetailRow from "../components/DetailRow";

const Header = () => {
  const isDesktop = useMediaQuery({query: '(min-width: 1224px)'})
  const textAlign = isDesktop? 'text-right' : 'text-center';
  return (
    <div>
      <div className={`title ${textAlign} w-100`}>Create a Event</div>
      <div className={`text-color-gray description-text ${textAlign} mb-4`}>Create and share events with your friends across any social media.</div>
    </div>
  )
}
const CreatePage = () => {
  const isDesktop = useMediaQuery({query: '(min-width: 1224px)'})
  const isTablet = useMediaQuery({ query: '(max-width: 1224px) and (min-width: 640px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' })
  
  return (
    <Container className={`${(isDesktop || isTablet) && 'v-100'}  page-container`}>
      <Row className={`justify-content-center ${(isDesktop || isMobile)? 'w-100': 'w-50'}`}>
        <Col xs={isDesktop ? 6 : 12} className='bg-light-gray pl-0 pr-0 rounded-4' >
           <div>
            <div className="logo">
              <img
                src={HeaderImg}
                className="img-fluid rounded-4 rounded-bottom"
                style={{
                  width: '100%'
                }}
                alt="logo"
              />
            </div>
            <div className='px-4 mt-4 mb-4'>
              <div className="card-title">Create new Event</div>
            </div>
          </div>
        
     
        </Col>
        <Col xs={isDesktop ? 6 : 12}>
       

          <div className='px-4 mt-4'>
          <Form>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Choose Event Image</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Event name</Form.Label>
              <Form.Control type="text" placeholder="Enter Event name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Host name</Form.Label>
              <Form.Control type="text" placeholder="Enter Host name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Start Time</Form.Label>
              <Form.Control type='date' placeholder="Start Time" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>End Time</Form.Label>
              <Form.Control type='date' placeholder="End Time" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="Enter Location" />
            </Form.Group>
            
            {/* <Button variant="primary" type="submit">
              Submit
            </Button> */}
            <div className='text-right mt-4 mb-4'>
              <Button className={`create-event-btn w-100`} href='/event'>Next</Button>
            </div>
          </Form>
        </div>

        </Col>
      </Row>
    </Container>
  )
};

export default CreatePage;