import React from 'react';
//import styled from 'styled-components';
//import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const Alert = (props) => {
    return (<>
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
<strong>{props.alert}</strong>  
<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    </>
    )
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
// #endregion

export default Alert;