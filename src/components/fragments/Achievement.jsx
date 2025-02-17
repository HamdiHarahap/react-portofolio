import js from '../../assets/images/js.png'
import web from '../../assets/images/web.png'
import frontend from '../../assets/images/frontend.png'
import react from '../../assets/images/react.png'
import backend from '../../assets/images/backend.png'
import bg from '../../assets/images/bg.jpg'
import ImageHover from '../elements/hover/ImageHover'

function Achievement() {
	const images = [
		{
			logo: web,
			label: 'Sertifikat Web Dasar',
			href: 'https://www.dicoding.com/certificates/MRZM81G2KZYQ',
		},
		{
			logo: js,
			label: 'Sertifikat Javascript',
			href: 'https://www.dicoding.com/certificates/1OP8N970VXQK',
		},
		{
			logo: frontend,
			label: 'Sertifikat Frontend',
			href: 'https://www.dicoding.com/certificates/4EXGK0O6DZRL',
		},
		{
			logo: react,
			label: 'Sertifikat React',
			href: 'https://www.dicoding.com/certificates/QLZ9VJ48EX5D',
		},
		{
			logo: backend,
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
							Certificate Gallery
						</h1>
						<div className="bg-amber-500 h-1 w-[10rem]"></div>
					</div>
					<ImageHover
						images={images}
						parentClass="flex justify-center flex-wrap gap-[3rem]"
						imgClass="w-[20rem] transition-transform duration-300 group-hover:scale-110"
						containerClass="group bg-[#2d2d39] p-6 rounded-lg relative overflow-hidden"
					/>
				</div>
			</div>
		</>
	)
}

export default Achievement
