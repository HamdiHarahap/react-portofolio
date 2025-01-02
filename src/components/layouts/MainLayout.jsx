import Navbar from '../fragments/Navbar'
import Hero from '../fragments/Hero'
import About from '../fragments/About'
import Skill from '../fragments/Skill'
import Project from '../fragments/Project'
import Achievement from '../fragments/Achievement'
import Footer from '../fragments/Footer'

const MainLayout = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Skill />
			<Project />
			<Achievement />
			<Footer />
		</>
	)
}

export default MainLayout
