import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeaderImg from "../assets/images/HeaderImg.png"
import EventImg from "../assets/images/Event_image.png"
import Button from 'react-bootstrap/Button';
import { FaCalendarAlt, FaChevronRight } from 'react-icons/fa';
import {IoLocationOutline} from 'react-icons/io5'
import { useMediaQuery } from 'react-responsive';
import DetailRow from "../components/DetailRow";

const DescriptionTitle = () => {
  const isDesktop = useMediaQuery({query: '(min-width: 1224px)'})
  const textAlign = isDesktop? 'text-right' : 'text-center';
  return (
    <div>
      <div className={`title ${textAlign} w-100`}>Imagine if</div>
      <div className={`title ${textAlign} w-100 gradient-text`}>Snapchat</div>
      <div className={`title ${textAlign} w-100`}>had events.</div>
      <div className={`text-color-gray description-text ${textAlign} mb-4`}>Easily host and share events with your friends across any social media.</div>
    </div>
  )
}
const Event = () => {
  const isDesktop = useMediaQuery({query: '(min-width: 1224px)'})
  const isTablet = useMediaQuery({ query: '(max-width: 1224px) and (min-width: 640px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' })
  
  return (
    <Container className={`${(isDesktop || isTablet) && 'v-100'} page-container ${isMobile && 'mx-0 px-0'}`}>
      <Row className={`justify-content-center ${(isDesktop || isMobile)? 'w-100': 'w-50'} ${!isDesktop && 'flex-coloum-reverse'} ${isMobile && 'mx-0 px-0'}`}>
        <Col xs={isDesktop ? 6 : 12} className={`${isMobile && 'mx-0 px-0'} pl-0 pr-0`}>
          <div>
            <div className='px-4 mt-4'>
              <div className="card-title">Birthday Bash</div>
              <p className='description mt-2'>Hosted by <span className='description name'>Elysia</span></p>
            </div>
          </div>
        <div className='px-4'>
          <DetailRow
            title='18 August 6:00PM'
            description='to 19 August 1:00PM UTC+10'
            IconComponent={FaCalendarAlt}
          />
          <DetailRow
            title='Street name'
            description='Sybyrbm State Postcode'
            IconComponent={IoLocationOutline}
          />
        </div>
        </Col>
        <Col xs={isDesktop ? 6 : 12} className={`${isMobile && 'mx-0 px-0'} pl-0 pr-0`}>
          <div className="logo">
            <img
              src={EventImg}
              className="img-fluid rounded-4 rounded-bottom"
              style={{
                width: '100%'
              }}
              alt="logo"
            />
          </div>
        </Col>
      </Row>
    </Container>
  )
};

export default Event;