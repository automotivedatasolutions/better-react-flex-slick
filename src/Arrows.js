import { default as React, Component, PropTypes } from 'react';

class PrevArrow extends Component {
  static propTypes = {
    activeClassName: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.string,
    currentSlide: PropTypes.number,
    handleClick: PropTypes.func,
    inactiveClassName: PropTypes.string,
    infinite: PropTypes.bool,
    size: PropTypes.number,
    style: PropTypes.object
  };

  static defaultProps = {
    activeClassName: '',
    color: '#795548',
    inactiveClassName: '',
    size: 30
  };

  render() {
    const {
      activeClassName,
      className,
      color,
      currentSlide,
      inactiveClassName,
      infinite,
      size,
      style,
      ...props
    } = this.props;

    const adjustedClassName = currentSlide === 0 && infinite === false ? inactiveClassName : activeClassName;

    const adjustedStyle = {
      ...style,
      ...(adjustedClassName !== '' ? {} : {
        width: 0,
        height: 0,
        borderBottom: `solid ${size} transparent`,
        borderTop: `solid ${size} transparent`,
        borderRight: `solid ${size} ${color}`
      })
    };

    return (
      <div
        {...props}
        className={`${adjustedClassName}${className ? ` ${className}` : '' }`}
        style={adjustedStyle}
        onClick={::this.props.handleClick}
      />
    );
  }
}

class NextArrow extends Component {
  static propTypes = {
    activeClassName: PropTypes.string,
    className: PropTypes.string,
    currentSlide: PropTypes.number,
    handleClick: PropTypes.func,
    inactiveClassName: PropTypes.string,
    infinite: PropTypes.bool,
    size: PropTypes.number,
    slideCount: PropTypes.number,
    style: PropTypes.object
  };

  static defaultProps = {
    activeClassName: '',
    color: '#795548',
    inactiveClassName: '',
    size: 30
  };

  render() {
    const {
      activeClassName,
      className,
      color,
      currentSlide,
      inactiveClassName,
      infinite,
      size,
      slideCount,
      style,
      ...props
    } = this.props;

    const adjustedClassName = (currentSlide + 1) === slideCount && infinite === false ? inactiveClassName : activeClassName;

    const adjustedStyle = {
      ...style,
      ...(adjustedClassName !== '' ? {} : {
        width: 0,
        height: 0,
        borderBottom: `solid ${size} transparent`,
        borderTop: `solid ${size} transparent`,
        borderLeft: `solid ${size} ${color}`
      })
    };

    return (
      <div
        {...props}
        className={`${adjustedClassName}${className ? ` ${className}` : '' }`}
        style={adjustedStyle}
        onClick={::this.props.handleClick}
      />
    );
  }
}

export { PrevArrow, NextArrow };
