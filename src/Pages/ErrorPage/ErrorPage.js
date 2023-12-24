import React from 'react'
import { NavLink } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import Button from '../../Components/Button/Button'

const ErrorPage = () => {
  return (
    <Row>
      <Col>
        <div className="text-center">
          <h2 className="mt-4 ">404</h2>
          <h3>You' are lost</h3>
          <p className="mt-4 mb-4">The page you are looking for does not exist. How you got here is a
            mystery.But you can click the button below to go back to the
            homepage.</p>
            <NavLink to="/">
              <Button >Go Back to Home </Button>
            </NavLink>
        </div>
      </Col>
    </Row>
  )
}

export default ErrorPage