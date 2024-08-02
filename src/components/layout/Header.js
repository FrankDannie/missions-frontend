import React from 'react'
import PropTypes from 'prop-types'
import './Header.css'
import Labels from '../common/labels'

const Header = ({ orgName }) => (
  <header className="header">
    <h1>{orgName || Labels.ORGANIZATION_NAME}</h1>
  </header>
)

Header.propTypes = {
  orgName: PropTypes.string,
}

Header.defaultProps = {
  orgName: Labels.ORGANIZATION_NAME,
}

export default Header
