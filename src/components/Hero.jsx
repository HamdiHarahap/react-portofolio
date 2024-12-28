import mailLogo from '../assets/logo/mail.svg'
import instagramLogo from '../assets/logo/instagram.svg'
import whatsappLogo from '../assets/logo/whatsapp.svg'
import selfImage from '../assets/images/self.png'

import Button from './Button'

function Hero() {
	const socials = [
		{ img: instagramLogo, href: 'https://www.instagram.com/hhmdi_/' },
		{ img: whatsappLogo, href: '' },
	]
	const social = socials.map((item, index) => (
		<a href={item.href} key={index}>
			<img
				src={item.img}
				alt="Logo"
				className="w-10 bg-slate-500 bg-opacity-25 p-2 rounded-full cursor-pointer"
			/>
		</a>
	))

	return (
		<>
			<div
				id="home"
				className="px-32 py-20 flex justify-between items-center max-[520px]:flex-col max-[520px]:px-4 max-[520px]:justify-center max-[520px]:gap-12 max-[520px]:py-24"
			>
				<div className="flex flex-col gap-4 ">
					<h2 className="text-3xl text-amber-500 font-semibold">
						Hi, i&lsquo;m Hamdi Harahap
					</h2>
					<h1 className="text-5xl font-bold text-white">Frontend Developer</h1>
					<p className="w-[27rem] text-gray-200 max-[520px]:w-full">
						Hello! I am a Politeknik Negeri Medan student from Indonesia with a
						passion for design, focusing on UI/UX Design and Frontend
						Development. I am dedicated to crafting intuitive interfaces and
						engaging user experiences while continuously improving my skills
						using the latest tools and technologies.
					</p>
					<p className="w-[20rem] text-amber-400">
						Lets build quality product in programing and design with my service.
					</p>
					<div className="flex gap-4 items-center">
						<Button text="Hire me" logo={mailLogo} />
						<div className="flex gap-5">{social}</div>
					</div>
				</div>
				<div>
					<img
						src={selfImage}
						alt=""
						className="w-[30rem] bg-[#2d2d39] rounded-full"
					/>
				</div>
			</div>
		</>
	)
}

export default Hero
