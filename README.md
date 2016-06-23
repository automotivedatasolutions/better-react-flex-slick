# better-react-flex-slick

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/better-react-flex-slick.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/better-react-flex-slick
[travis-image]: https://img.shields.io/travis/bentatum/better-react-flex-slick.svg?style=flat-square
[travis-url]: https://travis-ci.org/bentatum/better-react-flex-slick
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

Carousel components for React

## Install

```
npm install better-react-flex-slick
```

## Usage

```js
import { Slider, Slides, Dots, PrevArrow, NextArrow } from 'better-react-flex-slick'

const Carousel = ({ children, ...props }) =>
  <Slider {...props}>
    <PrevArrow />
    <Slides children={children} />
    <NextArrow />
    <Dots />
  </Slider>

```

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[ISC](LICENSE.md)
