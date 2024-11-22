import { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom';
import * as stylex from '@stylexjs/stylex'

const layout = stylex.create({
  base: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  secdiv: {
    display: 'flex',
    flexGrow: 1,
    paddingTop: '48px',
    backgroundColor: 'white'
  },
  thrddiv: {
    width: 'calc(100% - 256px)',
    flexGrow: 1,
    padding: '20px',
    overflowY: 'auto',
    backgroundColor: 'white',
    transition: 'margin-left 0.5s ease-in-out',
    border: '1px solid #ccc'
  },
  ml14: {
    marginLeft: '4px'
  },
  ml64: {
    marginLeft: '4px'
  }
})

const AdminLayout = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  return (
    <>
        <div  {...stylex.props(layout.base)}>
            <Navbar />
            <div {...stylex.props(layout.secdiv)}>
                <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
                <div {...stylex.props(layout.thrddiv, isSidebarCollapsed?layout.ml14:layout.ml64)}>
                    <Outlet />
                </div>
            </div>
        </div>
    </>
  )
}

export default AdminLayout