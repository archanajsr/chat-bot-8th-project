import HeroCarousel from "@/components/HeroCarousel";

import Image from "next/image";

const Home = async () => {
	return (
		<>
			<section className='px-6 md:px-20 py-24'>
				<div className='flex max-xl:flex-col gap-16'>
					<div className='flex flex-col justify-center'>
						<p className='small-text'>
							Smart AI Chatting Starts Here:
							<Image
								src='/assets/icons/arrow-right.svg'
								alt='arrow-right'
								width={16}
								height={16}
							/>
						</p>

						<h1 className='head-text'>
							Unleash the Power of
							<span className='text-primary'> ChatBot AI</span>
						</h1>

						<p className='mt-6 justify-center align-middle'>
							Get your customized Spotify playlists tailored to your emotions
							and feelings
						</p>
					</div>

					<HeroCarousel />
				</div>
			</section>
		</>
	);
};

export default Home;
