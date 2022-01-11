import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'

const NavbarMenu = () => (
	<Navbar bg='dark' variant='dark'>
		<Navbar.Brand>ZWeb Reactjs</Navbar.Brand>
		<Nav>
			<Link href='/' passHref>
				<Nav.Link>Home</Nav.Link>
			</Link>
			<Link href='/posts' passHref>
				<Nav.Link>Posts</Nav.Link>
			</Link>
			
		</Nav>
	</Navbar>
)

export default NavbarMenu