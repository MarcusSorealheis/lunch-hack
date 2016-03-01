import React from 'react';

const infoStyles = {
  width: '40px',
  height: '40px',
  border: '5px solid rgba(255,255,255,0.5)',
  borderRadius: '40px',
  backgroundColor: '#00C7FB',
  color: 'white',
  fontFamily: 'serif',
  fontWeight: 'bold',
  display: 'inline-block',
  lineHeight: '31px',
  textAlign: 'center',
};

const Info = (props) => (
  <span style={infoStyles} onClick={props.onClick} >
    i
  </span>
);

Info.propTypes = {
  onClick: React.PropTypes.func,
};

export default Info;
