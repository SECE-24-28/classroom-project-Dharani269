function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#333',
      padding: '10px 20px',
      margin: 0
    }}>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        gap: '30px',
        margin: 0,
        padding: 0
      }}>
        <li><a href="#" style={{color: 'white', textDecoration: 'none'}}>Home</a></li>
        <li><a href="#" style={{color: 'white', textDecoration: 'none'}}>About</a></li>
        <li><a href="#" style={{color: 'white', textDecoration: 'none'}}>Contact</a></li>
      </ul>
    </nav>
  )
}
export default Navbar