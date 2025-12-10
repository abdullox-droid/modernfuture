import { Link } from 'react-router-dom'

export default function Navbar({ bagCount = 0 }) {

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
                        <li className='bag'><Link to='/bag'><img src="src/assets/bag 2.png" alt="" /> <span >{bagCount}</span></Link></li>
                        <li><Link to='/contacts'>Contacts</Link></li>
                    </ul>
                </li>
            </ul>
            </div>
        </>
    )
}