import { default as React, PropTypes } from 'react'

const range = n => [...Array(n)].map((_, i) => i)

const Dots = ({ activeClassName, slideCount, currentSlide, onClick }) =>
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    {range(slideCount).map((x, i) =>
      <div
        className={i === currentSlide ? activeClassName : ''}
        onClick={() => onClick(i - currentSlide)}
        style={{
          width: 8,
          height: 8,
          borderRadius: 8,
          backgroundColor: 'black',
          opacity: i === currentSlide ? 1 : 0.2,
          margin: 3
        }}
        key={i}
      />
    )}
  </div>

Dots.propTypes = {
  className: PropTypes.string,
  currentSlide: PropTypes.number,
  onClick: PropTypes.func,
  slideCount: PropTypes.number
}

export default Dots
