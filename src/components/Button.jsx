// eslint-disable-next-line react/prop-types
function Button({ text, logo }) {
	return (
		<>
			<button className="bg-amber-500 w-fit flex items-center px-5 py-3 gap-3 rounded-lg">
				<img src={logo} alt="" className="w-5" />
				<a href="" className="font-bold text-white text-lg">
					{text}
				</a>
			</button>
		</>
	)
}

export default Button
