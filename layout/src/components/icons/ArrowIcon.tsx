import * as stylex from '@stylexjs/stylex'

const arrow = stylex.create({
    base: {
        minWidth: '16px',
        marginLeft: '-4px'
    }
});

const ArrowIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...stylex.props(arrow.base)} viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
  )
}

export default ArrowIcon