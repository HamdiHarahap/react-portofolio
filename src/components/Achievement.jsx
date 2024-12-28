import js from '../assets/images/js.png'
import web from '../assets/images/web.png'
import frontend from '../assets/images/frontend.png'
import react from '../assets/images/react.png'
import backend from '../assets/images/backend.png'
import bg from '../assets/images/bg.jpg'

function Achievement() {
	const images = [
		{
			src: web,
			label: 'Sertifikat Web Dasar',
			href: 'https://www.dicoding.com/certificates/MRZM81G2KZYQ',
		},
		{
			src: js,
			label: 'Sertifikat Javascript',
			href: 'https://www.dicoding.com/certificates/1OP8N970VXQK',
		},
		{
			src: frontend,
			label: 'Sertifikat Frontend',
			href: 'https://www.dicoding.com/certificates/4EXGK0O6DZRL',
		},
		{
			src: react,
			label: 'Sertifikat React',
			href: 'https://www.dicoding.com/certificates/QLZ9VJ48EX5D',
		},
		{
			src: backend,
			label: 'Sertifikat Backend',
			href: 'https://www.dicoding.com/certificates/1RXY28471XVM',
		},
	]

	return (
		<>
			<div id="certificates" className="relative px-32 py-10 max-[520px]:px-4">
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{ backgroundImage: `url(${bg})` }}
				></div>
				<div className="absolute inset-0 bg-black opacity-80"></div>

				<div className="relative z-10 flex flex-col items-center gap-10">
					<div className="flex flex-col justify-center items-center">
						<h1 className="text-white text-4xl font-semibold mb-6 text-center">
							Gallery Sertificate
						</h1>
						<div className="bg-amber-500 h-1 w-[10rem]"></div>
					</div>
					<div className="flex justify-center flex-wrap gap-[3rem]">
						{images.map((image, index) => (
							<div
								key={index}
								className="group bg-[#2d2d39] p-6 rounded-lg relative overflow-hidden"
							>
								<a href={image.href} target="_blank">
									<img
										src={image.src}
										alt={image.label}
										className="w-[20rem] transition-transform duration-300 group-hover:scale-110"
									/>
									<h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
										{image.label}
									</h2>
								</a>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default Achievement
