import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import NavbarMenu from './NavbarMenu'
import 'bootstrap/dist/css/bootstrap.css';

const Layout = ({ children }) => (
	<Container>
		<Head>
			<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			<title>Neko Reactjs</title>
		</Head>

		<header>
			<NavbarMenu />
		</header>

		<main>{children}</main>
	</Container>
)

export default Layout