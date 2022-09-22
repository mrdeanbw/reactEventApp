import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeaderImg from "../assets/images/HeaderImg.png"
import Button from 'react-bootstrap/Button';
import { FaCalendarAlt, FaLink } from 'react-icons/fa';
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
const Home = () => {
  const isDesktop = useMediaQuery({query: '(min-width: 1224px)'})
  const isTablet = useMediaQuery({ query: '(max-width: 1224px) and (min-width: 640px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' })
  
  return (
    <Container className={`${(isDesktop || isTablet) && 'v-100'}  page-container`}>
      {(!isDesktop) && <DescriptionTitle/>}
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
            <div className='px-4 mt-4'>
              <div className="card-title">Movie night</div>
              <p className='description mt-2'>👋 Hosted by <span className='description name'>Elysia</span></p>
              <div className='card-container d-row align-items-center justify-content-between'>
                <div>{`14`} responses <span className='color-light-purple'>· see guests</span></div>
                <Button variant="primary" className='bg-purple invite-btn' >🤝 Invite</Button>
              </div>
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
            description='301 Rowes Lane, WA, 7183'
            IconComponent={IoLocationOutline}
          />
          <DetailRow
            title='Link'
            description='netflix.com'
            IconComponent={FaLink}
          />
        </div>
        </Col>
        <Col xs={isDesktop ? 6 : 12}>
          {isDesktop && <DescriptionTitle />}
          <div className='text-right mt-4 mb-4'>
            <Button className={`create-event-btn ${isDesktop ?  'w-50' : 'w-100'}`} href='/create'>🎉 Create my event</Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
};

export default Home;