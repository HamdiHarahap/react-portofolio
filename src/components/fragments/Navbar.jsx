import { useState, useEffect } from 'react'
import githubLogo from '../../assets/logo/github.svg'
import linkedinLogo from '../../assets/logo/linkedin.svg'
import menuIcon from '../../assets/logo/menu.svg'

function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const lists = ['Home', 'About', 'Skill', 'Project', 'Certificates']
	const socials = [
		{ img: githubLogo, href: 'https://github.com/HamdiHarahap' },
		{
			img: linkedinLogo,
			href: 'https://www.linkedin.com/in/hamdi-harahap-a633a8292/',
		},
	]

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev)
	}

	const list = lists.map((item) => (
		<li key={item}>
			<a href={`#${item.toLowerCase()}`} className="hover:text-amber-500">
				{item}
			</a>
		</li>
	))

	const social = socials.map((social, index) => (
		<a key={index} href={social.href}>
			<img className="w-4" key={social} src={social.img} alt="Logo" />
		</a>
	))

	return (
		<nav
			className={`flex justify-between px-32 py-5 fixed w-full transition-all duration-300 z-50 ${
				isScrolled ? 'bg-[#2d2d39]' : 'bg-transparent'
			} max-[520px]:px-4 max-[520px]:flex-col-reverse max-[520px]:bg-[#2d2d39] max-[520px]:gap-10`}
		>
			<ul
				className={`flex gap-5 text-gray-200 font-semibold max-[520px]:flex-col max-[520px]:${
					isMenuOpen ? '' : 'hidden'
				}`}
			>
				{list}
			</ul>
			<div className="flex justify-between">
				<div className="flex gap-6">{social}</div>
				<img
					src={menuIcon}
					className="w-7 max-[520px]:flex hidden cursor-pointer"
					id="menuButton"
					onClick={toggleMenu}
					alt="Menu Button"
				/>
			</div>
		</nav>
	)
}

export default Navbar
