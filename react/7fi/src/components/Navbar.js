import '../main.css'
import { Link } from 'react-router-dom'
import { setTheme } from '../lib/hooks'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useState } from 'react'

export default function Navbar() {
  const [theme, setThemeVal] = useState(localStorage.getItem('theme'))

  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link to='/' className='text-title'>
            Carter Anderson
          </Link>
        </li>
        <ul className='navRight'>
          <li>
            <Link to='/about'>about</Link>
          </li>
          <li>
            <Link to='/portfolio'>portfolio</Link>
          </li>
          <li>
            <Link to='/contact'>contact</Link>
          </li>
          <li>
            <button
              onClick={() => {
                setTheme(localStorage.getItem('theme') == 'light' ? 'dark' : 'light')
                setThemeVal(localStorage.getItem('theme'))
              }}>
              <RenderThemeBtn />
            </button>
          </li>
        </ul>
      </ul>
    </nav>
  )
}

function RenderThemeBtn() {
  switch (localStorage.getItem('theme') ? localStorage.getItem('theme') : null) {
    case 'dark':
      return <FaSun />

    default:
      return <FaMoon />
  }
}
