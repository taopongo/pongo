const Home = () => {
	return <div className='flex flex-col justify-center items-center w-screen h-screen gap-8'>
		<div className='w-full text-4xl text-center font-bold'><span className='text-blue-400'>Pongo</span> 主页</div>
		<div>
			<a href='https://city-pongo.vercel.app/' target='_blank' className='block border border-zinc-400 p-8 rounded-xl font-semibold cursor-pointer hover:border-blue-400 hover:text-blue-400'>城市选择器</a>
		</div>
	</div>
}

export default Home
