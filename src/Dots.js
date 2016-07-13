import { default as React, PropTypes } from 'react'
import { default as Prefixer } from 'inline-style-prefixer'
const prefixer = new Prefixer()
const range = n => [...Array(n)].map((_, i) => i)

let sx = {
  display: 'flex',
  justifyContent: 'center'
}

if (typeof document !== 'undefined') {
  sx = prefixer.prefix(sx)
}

const Dots = ({ activeClassName, slideCount, currentSlide, onClick }) =>
  <div style={sx}>
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
