import { Link } from 'react-router-dom'

export default function Home({}) {
  return (
    <>
      <div className='heroImg'>
        <div className='heroCenter'>
          <Link to='/about' className='titleText'>
            Carter Anderson
          </Link>
          <br />
          <Link to='https://github.com/7fi'>Developer</Link>
        </div>
      </div>
    </>
  )
}
