import HomeIcon from '@rsuite/icons/legacy/Home'
import { useContext, useState } from 'react'
import { Nav, Navbar } from 'rsuite'
import Container from './helpers/Container'

export default function Header() {
	const [openMenu, setOpenMenu] = useState(false)

	const handleMenu = () => setOpenMenu((state) => !state)

	return (
		<header>
			<Navbar id="navbar">
				<Container>
					<div id="navHead">
						<Navbar.Brand
							id="logoText"
							href="/"
						>
							The International Data Matrix
						</Navbar.Brand>
						<div onClick={handleMenu}>
							<HomeIcon />
						</div>
					</div>
					{openMenu && (
						<div id="menu">
							<Nav id="nav">
								<Nav.Item
									id="item"
									icon={<HomeIcon />}
									href="/"
								>
									Home
								</Nav.Item>
								<Nav.Item href="Countries">Country Selection</Nav.Item>
								<Nav.Item href="Translator">Translator</Nav.Item>
								<Nav.Item href="Contact">Contact</Nav.Item>
							</Nav>
						</div>
					)}
				</Container>
			</Navbar>
		</header>
	)
}
