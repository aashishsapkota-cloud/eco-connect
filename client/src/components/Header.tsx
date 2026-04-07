import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="flex items-center justify-between px-10 py-4 sticky top-0 bg-white  shadow-md">
            <h1 className="text-2xl font-semibold flex gap-2 items-center">
                <img src="https://img.freepik.com/free-vector/leaf-spring-icon_24911-115668.jpg?w=360" className='h-10 w-10' alt="logo" />
                Converty <span className="text-green-700">EcoConnect</span>
            </h1>
            <nav>
                <ul className="flex items-center gap-6 cursor-pointer ">
                    <Link to="/"><li className='hover:text-green-600'>Home</li></Link>
                    <Link to="/listings"><li className='hover:text-green-600'>Listings</li></Link>
                    <Link to="/profile"><li className='hover:text-green-600'>Profile</li></Link>
                    <Link to="/login"><button className='bg-green-600 text-white  rounded-md px-4 py-2 hover:bg-green-700'>Login</button></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header