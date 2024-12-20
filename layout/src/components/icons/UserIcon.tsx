import * as stylex from '@stylexjs/stylex'

const atr = stylex.create({
  base: {
      width: '20px',
  }
});

const UserIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...stylex.props(atr.base)} viewBox="0 0 24 24" fill="currentColor"><path d="M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"></path></svg>
  )
}

export default UserIcon