import { Link, useLocation } from 'react-router-dom'
import * as stylex from '@stylexjs/stylex'  

const items = stylex.create({
    link: {
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        border: {
            default: '1px solid white',
            ':hover': '1px solid gray'
        },
        padding: '10px 14px',
        borderRadius: '5px',
        
    },
    active: {
        backgroundColor: 'lightgray',
    },
    lispan: {
        color: 'black',
        marginLeft: '10px',
        transition: 'all 0.3s ease-in-out',
        // fontWeight: 'bold'

    },
    hid: {
        display: 'none'
    },
    blk: {
        display: 'block'
    },
    linkdi: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        transition: 'all 0.3s ease-in-out'
    }

})
const SidebarItem = ({href, label, isCollapsed, icon}:any) => {
    const location = useLocation();
    const isActive = location.pathname === href;

    return (
        <>
            <li {...stylex.props(items.link, isActive&&items.active)}>
                <Link to={href}  {...stylex.props(items.linkdi)}>
                {icon}
                    <span {...stylex.props(items.lispan, isCollapsed?items.hid:items.blk)}>{label}</span>
                </Link>
            </li>
        </>
    )
}

export default SidebarItem