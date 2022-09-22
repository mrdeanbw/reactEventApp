import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaChevronRight } from 'react-icons/fa';

const DetailRow = ({title, description, IconComponent, onNavigate}) => {
  return (
    <Row className='justify-content-between align-items-center mt-3 mb-3'>
      <Col xs={2}>
        <div className='icon-background'>
          <IconComponent color='#8456EC' size={30}/>
        </div>
      </Col>
      <Col xs={9}>
        <div className=''>
          <div className='card-row-title color-purple'>{title}</div>
          <div className='card-row-description color-dark'>{description}</div>
        </div>
      </Col>
      <Col xs={1}>
        <FaChevronRight onClick={onNavigate} color='#BDBDBD' />
      </Col>
    </Row>
  )
}
export default DetailRow;
