import React from 'react';
import PropTypes from 'prop-types';

function Button({
  onClick,
  children,
  id,
  className,
}) {
  return (
    <button
      type="button"
      id={id}
      className={`button ${className}`}
      onClick={() => onClick(children)}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
};

// Add default props here
Button.defaultProps = {
  id: '',
  className: '',
};

export default Button;
