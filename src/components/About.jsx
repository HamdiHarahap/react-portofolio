function About() {
	const educationals = [
		{
			name: 'Politeknik Negeri Medan',
			studi: 'Software Enginering',
			year: '2023 - 2027',
		},
		{
			name: 'MAN 2 Model Medan',
			studi: 'Natural Sciences',
			year: '2020 - 2023',
		},
		{
			name: 'SMP Muhammadiyah 1 Medan',
			studi: 'General Studies',
			year: '2017 - 2020',
		},
	]

	return (
		<>
			<div
				id="about"
				className="bg-[#2d2d39] flex justify-between items-center px-32 py-20 max-[520px]:px-4 max-[520px]:flex-col"
			>
				<div className="flex flex-col gap-5">
					<h3 className="text-amber-500 font-semibold text-2xl">This Is My</h3>
					<h1 className="font-bold text-white text-5xl">
						Educational History <br /> That Makes Me Grow
					</h1>
					<p className="text-gray-300">
						Education that helps me build character, improve skills, knowledge,{' '}
						<br />
						insight and experience.
					</p>
				</div>
				<div className="w-1 h-[80vh] bg-amber-500 max-[520px]:hidden"></div>
				<div className="h-1 w-full bg-amber-500 hidden max-[520px]:flex my-10"></div>
				<div className="flex flex-col gap-7">
					{educationals.map((educational, index) => {
						return (
							<div key={index}>
								<h4 className="text-amber-500 font-semibold text-lg">
									{educational.year}
								</h4>
								<h1 className="font-bold text-white text-3xl">
									{educational.name}
								</h1>
								<h3 className="text-gray-300 font-semibold text-xl">
									{educational.studi}
								</h3>
							</div>
						)
					})}
				</div>
			</div>
		</>
	)
}

export default About
