import { useState } from "react"
import { ArrowDown, NotificationBell, User } from "../constants/image";
import * as stylex from "@stylexjs/stylex";

const navStyle = stylex.create({
    header: {
        width: '100%',
        backgroundColor: 'white',
        position: 'fixed',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '10px 20px'
    },
    dms: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '1.5rem',
        fontWeight: 'bold'
    },
    dms2: {
        width: '30px',
        height: '30px',
        borderRadius: '100%',
        backgroundColor: 'lightgray',
        color: 'white',
        margin: '0 10px'
    },
    grpdiv: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '12px',
    },
    grpdiv2: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '12px',
    },
    btn: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        backgroundColor: 'white',
    },
    btn2: {
        border:'none',
        cursor: 'pointer'
    },
    btnspan1: {
        fontSize: '0.8rem'
    },
    btnspan2: {
        fontSize: '0.8rem',
        fontWeight: 'bold'
    },
    btnspan3: {
        fontSize: '0.8rem'
    },
    dropdown: {
        position: 'absolute',
        top: '100%',
        backgroundColor: 'white',
        border: '1px solid #ccc',
        borderRadius: '5px',
        marginRight: '0.5rem',
        width: '130px',
        zIndex: 1,
    },
    ul: {
        padding: '5px 0',
        listStyle: 'none'
    },
    li: {
        padding: '5px 10px',
        backgroundColor: {
            default: 'white',
            ':hover': 'lightgray'
        },
        cursor: 'pointer',

    },
    notcount: {
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '20%',
        padding: '0 2px',
        fontSize: '0.6rem',
        margin: '0 0 10px -18px'
    },
    search: {
        padding: '0.5rem',
        border: '1px solid #ccc',
        borderRadius: '5px',
        outline: 'none',
        width: '200px'
    }

});

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
        <header {...stylex.props(navStyle.header)}>
            <nav {...stylex.props(navStyle.nav)}>
                <div {...stylex.props(navStyle.dms)}>
                    <div {...stylex.props(navStyle.dms2)}></div>
                    <span>DMS System</span>
                    
                </div>
                <div {...stylex.props(navStyle.grpdiv)}>
                    <input type="text" {...stylex.props(navStyle.search)} placeholder="Search"/>
                    <div {...stylex.props(navStyle.grpdiv2)}>
                        <button {...stylex.props(navStyle.btn, navStyle.btn2)}>
                            {NotificationBell}
                            <span {...stylex.props(navStyle.notcount)}>2</span>
                        </button>
                        
                    </div>
                    <div {...stylex.props(navStyle.grpdiv)}>
                        <button onClick={toggleDropdown} {...stylex.props(navStyle.btn)}>
                            <span {...stylex.props(navStyle.btnspan1)}> {User} </span>
                            <span {...stylex.props(navStyle.btnspan2)}> Tony Stark </span>
                            <span {...stylex.props(navStyle.btnspan3)}> {ArrowDown} </span>
                        </button>
                        {isDropdownOpen && (
                            <div {...stylex.props(navStyle.dropdown)}>
                                <ul {...stylex.props(navStyle.ul)}>
                                    <li {...stylex.props(navStyle.li)}>Profile</li>
                                    <li {...stylex.props(navStyle.li)}>Settings</li>
                                    <li {...stylex.props(navStyle.li)}>Logout</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Navbar