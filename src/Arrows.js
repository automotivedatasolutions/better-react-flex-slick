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
    style: PropTypes.object
  };

  static defaultProps = {
    activeClassName: '',
    color: '#795548',
    inactiveClassName: ''
  };

  render() {
    const {
      activeClassName,
      className,
      color,
      currentSlide,
      inactiveClassName,
      infinite,
      style,
      ...props
    } = this.props;

    const adjustedClassName = currentSlide === 0 && infinite === false ? inactiveClassName : activeClassName;

    const adjustedStyle = {
      ...style,
      ...(adjustedClassName !== '' ? {} : {
        width: 0,
        height: 0,
        borderBottom: 'solid 30px transparent',
        borderTop: 'solid 30px transparent',
        borderRight: `solid 40px ${color}`
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
    slideCount: PropTypes.number,
    style: PropTypes.object
  };

  static defaultProps = {
    activeClassName: '',
    color: '#795548',
    inactiveClassName: ''
  };

  render() {
    const {
      activeClassName,
      className,
      color,
      currentSlide,
      inactiveClassName,
      infinite,
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
        borderBottom: 'solid 30px transparent',
        borderTop: 'solid 30px transparent',
        borderLeft: `solid 40px ${color}`
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
