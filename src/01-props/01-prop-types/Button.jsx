import PropTypes from 'prop-types';

const Button = ({
  className,
  disabled,
  onClick,
  children,
  size,
  spinner,
  ...props
}) => (
  <button
    type="button"
    className={`${className} button button-${size}`}
    disabled={disabled}
    onClick={onClick}
    {...props}
  >
    {spinner && <span className={`spinner-${spinner.modifier}`} />}
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
  spinner: PropTypes.shape({
    highlight: PropTypes.bool,
    size: PropTypes.string,
    modifier: PropTypes.string,
  }),
};

Button.defaultProps = {
  className: '',
  disabled: false,
  size: 'large',
  onClick: null,
  spinner: {
    highlight: true,
    size: 'xsmall',
    modifier: 'inline',
  },
};

export { Button };
