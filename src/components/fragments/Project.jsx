import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import '../../style/project.css'

import note from '../../assets/images/note.png'
import notes from '../../assets/images/notes.png'
import slots from '../../assets/images/slots.png'
import khodam from '../../assets/images/khodam.png'
import bookshelf from '../../assets/images/bookshelf.png'
import qrgen from '../../assets/images/qrgen.png'
import ImageHover from '../elements/hover/ImageHover'

function Project() {
	const projects = [
		{
			logo: bookshelf,
			label: 'Bookshelf App: Manage your personal library',
			href: 'https://github.com/HamdiHarahap/bookshelf-apps',
		},
		{
			logo: note,
			label: 'Simple Note Keeper: Lightweight note-taking app',
			href: 'https://github.com/HamdiHarahap/note-app',
		},
		{
			logo: notes,
			label: 'Advanced Notes Manager: Organize and categorize your notes',
			href: 'https://github.com/HamdiHarahap/notes-app',
		},
		{
			logo: slots,
			label: 'Slot Machine Game: Try your luck with virtual slots',
			href: 'https://github.com/HamdiHarahap/slots',
		},
		{
			logo: khodam,
			label: 'Khodam Checker: Web to check your Khodam',
			href: 'https://github.com/HamdiHarahap/cek-khodam',
		},
		{
			logo: qrgen,
			label: 'QR Code Generator: Generate and customize QR codes',
			href: 'https://github.com/HamdiHarahap/qr-generator',
		},
	]

	return (
		<>
			<div
				id="project"
				className="px-32 py-7 flex flex-col bg-[#2d2d39] h-[100vh] justify-center gap-10 max-[520px]:px-4"
			>
				<div className="flex flex-col justify-center items-center">
					<h1 className="text-white text-4xl font-semibold mb-6 text-center">
						My Projects
					</h1>
					<div className="bg-amber-500 h-1 w-[10rem]"></div>
				</div>

				<Splide
					options={{
						type: 'loop',
						perPage: 3,
						perMove: 1,
						autoplay: true,
						interval: 2000,
						gap: '1rem',
						padding: '1rem',
						pagination: false,
						breakpoints: {
							520: {
								perPage: 1,
							},
						},
					}}
					className="w-full"
				>
					{projects.map((project, index) => (
						<SplideSlide key={index}>
							<ImageHover
								images={[project]}
								containerClass="group bg-[#353543] rounded-lg flex justify-center items-center p-4 h-[15rem]"
								imgClass="w-[22rem] h-full object-contain transition-transform duration-300 group-hover:scale-105"
							/>
						</SplideSlide>
					))}
				</Splide>
			</div>
		</>
	)
}

export default Project
