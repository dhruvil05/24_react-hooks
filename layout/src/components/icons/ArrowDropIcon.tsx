import * as stylex from '@stylexjs/stylex'

const atr = stylex.create({
  base: {
      width: '20px',
  }
});

const ArrowDropIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...stylex.props(atr.base)} viewBox="0 0 24 24" fill="currentColor"><path d="M12 16L6 10H18L12 16Z"></path></svg>
  )
}

export default ArrowDropIcon