import { AutoResponse, Customers, Subscriptions, User, UserManagement, UserRoles, Arrow } from '../constants/image';
import SidebarItem from './SidebarItem'
import * as stylex from '@stylexjs/stylex'

const sidebar = stylex.create({
    aside: {
        backgroundColor: 'white',
        width: '256px',
        transition: 'width 0.3s ease-in-out',
        height: '100%',
    },
    collapsed: {
        width: '80px'
    },
    ul: {
        listStyle: 'none',
        padding: '0'
    },
    tglbtn: {
        display: 'flex',
        alignItems: 'center',
        height: '23px',
        width: '23px',
        marginLeft : '230px',
        position: 'relative',
        zIndex: '1',
        transform: 'rotate(180deg)',
        borderRadius: '50%',
        cursor: 'pointer'
    },
    tgldbtn: {
        width: '23px',
        marginLeft : '55px',
        position: 'relative',
        zIndex: '1',
        transform: 'rotate(0)'
    },
    nav: {
        padding: '1rem',
    }

});

const Sidebar = ({ isCollapsed, toggleSidebar }:any) => {
    const sidebarItems = [
        { href: "/admin/home", label: "Dashboard", icon: User},
        { href: "/admin/user-roles", label: "User Roles", icon: UserRoles},
        { href: "/admin/user-management", label: "User Management", icon: UserManagement},
        { href: "/admin/customers", label: "Customers", icon: Customers},
        { href: "/admin/auto-response", label: "Auto Response", icon: AutoResponse},
        { href: "/admin/subscriptions", label: "Subscription", icon: Subscriptions}
    ];

  return (
    <>
        <aside {...stylex.props(sidebar.aside, isCollapsed&&sidebar.collapsed)}>
            <nav {...stylex.props(sidebar.nav)}>
                <button onClick={toggleSidebar} {...stylex.props(sidebar.tglbtn, isCollapsed&&sidebar.tgldbtn)}>
                    {Arrow}
                </button>
                <ul {...stylex.props(sidebar.ul)}>
                    { sidebarItems.map((item)=> (
                        <SidebarItem key={item.href} href={item.href} label={item.label} icon={item.icon} isCollapsed={isCollapsed} />
                    ))}
                </ul>
            </nav>
        </aside>
    </>
  )
}

export default Sidebar