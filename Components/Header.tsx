import Link from "next/link"
function Header(){
    return(
<header style={{ backgroundColor: '#4a90e2', color: 'white', padding: '20px', textAlign: 'center' }}>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center' }}>
          <li style={{ display: 'inline', margin: '0 15px' }}>

            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          </li>
          <li style={{ display: 'inline', margin: '0 15px' }}>

            <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
          </li>
          <li style={{ display: 'inline', margin: '0 15px' }}>

            <Link href="/contact-us" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
    
    )
}
export default Header
{/**header,ul,li link */}