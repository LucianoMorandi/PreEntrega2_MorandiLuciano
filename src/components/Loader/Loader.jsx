import React from 'react'
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';

const Loader = ({ loading }) => {
  return (
    <><Spinner className='d-flex justify-content-center' animation="grow" variant="warning" /> loading...</>
  )
}

Loader.propTypes = {
    loading: PropTypes.bool.isRequired
}

export default Loader