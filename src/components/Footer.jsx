import github from '../assets/logo/github.svg'
import linkedin from '../assets/logo/linkedin.svg'
import instagram from '../assets/logo/instagram-light.svg'
import mail from '../assets/logo/mail.svg'
import whatsapp from '../assets/logo/whatsapp-light.svg'

function Footer() {
	const images = [whatsapp, instagram, mail, linkedin, github]

	return (
		<div className="bg-[#2d2d39] flex items-center py-12 px-32 justify-between max-[520px]:flex-col max-[520px]:px-4 max-[520px]:gap-6">
			<p className="text-white font-semibold text-lg">
				Created by HamdiHarahap 🚀 | &copy; 2024
			</p>
			<div className="flex gap-4">
				{images.map((image, index) => (
					<div
						key={index}
						className="border-2 w-fit rounded-full p-2 hover:bg-amber-500 transition-all duration-300 cursor-pointer"
					>
						<a href="">
							<img src={image} alt="" className="w-5" />
						</a>
					</div>
				))}
			</div>
		</div>
	)
}

export default Footer
