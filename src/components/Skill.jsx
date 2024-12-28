import js from '../assets/logo/javascript.svg'
import html from '../assets/logo/html.svg'
import css from '../assets/logo/css.svg'
import node from '../assets/logo/node.svg'
import react from '../assets/logo/react.svg'
import bootstrap from '../assets/logo/bootstrap.svg'
import tailwind from '../assets/logo/tailwind.svg'
import php from '../assets/logo/php.svg'
import mysql from '../assets/logo/mysql.svg'
import git from '../assets/logo/git.svg'
import photoshop from '../assets/logo/photoshop.svg'

function Skill() {
	const skills = [
		{ name: 'HTML', logo: html },
		{ name: 'CSS', logo: css },
		{ name: 'JavaScript', logo: js },
		{ name: 'React', logo: react },
		{ name: 'Node.js', logo: node },
		{ name: 'Bootstrap', logo: bootstrap },
		{ name: 'Tailwind CSS', logo: tailwind },
		{ name: 'PHP', logo: php },
		{ name: 'MySQL', logo: mysql },
		{ name: 'Git', logo: git },
		{ name: 'Photoshop', logo: photoshop },
	]

	return (
		<>
			<div
				id="skill"
				className="flex justify-between items-center px-32 py-28 max-[520px]:gap-8 max-[520px]:px-4 max-[520px]:flex-col"
			>
				<div className="flex flex-col gap-5">
					<h3 className="text-amber-500 font-semibold text-2xl">My Skills</h3>
					<h1 className="font-bold text-white text-5xl">
						Development Tools <br /> That I Master
					</h1>
					<p className="text-gray-300">
						Software that helps me work, Software is just a tool that makes a{' '}
						<br /> product useful depending on ideas, innovation and creativity.
					</p>
				</div>
				<div className="flex gap-4 flex-wrap w-[35rem] max-[520px]:w-full max-[520px]:justify-center~">
					{skills.map((skill, index) => (
						<div
							key={index}
							className="group bg-[#2d2d39] p-4 rounded-lg relative overflow-hidden cursor-pointer"
						>
							<img
								src={skill.logo}
								alt={skill.name}
								className="w-16 mx-auto transition-transform duration-300 group-hover:scale-110"
							/>
							<h2 className="absolute inset-0 flex items-center justify-center text-center text-white text-xl font-semibold bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
								{skill.name}
							</h2>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default Skill
