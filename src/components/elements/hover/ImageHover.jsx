/* eslint-disable react/prop-types */
function ImageHover({ images, containerClass, imgClass, parentClass }) {
	return (
		<div className={parentClass}>
			{images.map((image, index) => (
				<div key={index} className={containerClass}>
					<img src={image.logo} alt={image.name} className={imgClass} />
					<div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white text-xl font-semibold bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
						<h2 className="">{image.label || image.name}</h2>
						{image.href ? (
							<a
								href={image.href}
								target="_blank"
								className="text-amber-500 font-semibold"
							>
								View -{'>'}
							</a>
						) : null}
					</div>
				</div>
			))}
		</div>
	)
}

export default ImageHover
