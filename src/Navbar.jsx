import { Link } from 'react-router-dom'

export default function Navbar() {

    return (
        <>
            <div className='bbb'>
                <ul className='da'>
                <li id='logo'>
                    <Link to='/'>Furniture</Link>
                </li>
                <li>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/aboutus'>About Us</Link></li>
                        <li><Link to='/products'>Products</Link></li>
                        <li><Link to='/contacts'>Contacts</Link></li>
                    </ul>
                </li>
            </ul>
            </div>
        </>
    )
}