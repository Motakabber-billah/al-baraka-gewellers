import { Outlet } from 'react-router-dom'
import NavBar from '../Shared/NavBar/NavBar'

const Main = () => {
    return (
        <div className='font-nikosh px-2 xl:px-0'>
            <Outlet></Outlet>
        </div>
    )
}

export default Main