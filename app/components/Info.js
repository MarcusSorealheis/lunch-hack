import React from 'react';

const infoStyles = {
  width: '30px',
  height: '30px',
  border: '4px solid rgba(255,255,255,0.5)',
  borderRadius: '30px',
  backgroundColor: '#00C7FB',
  color: 'white',
  fontFamily: 'serif',
  fontWeight: 'bold',
  display: 'inline-block',
  lineHeight: '24px',
  textAlign: 'center',
  cursor: 'pointer',
  marginLeft: '5px',
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
