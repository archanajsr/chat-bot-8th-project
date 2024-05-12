import Image from "next/image";
import Link from "next/link";

const navIcons = [
	{ src: "/assets/icons/search.svg", alt: "search" },
	{ src: "/assets/icons/black-heart.svg", alt: "heart" },
	{ src: "/assets/icons/user.svg", alt: "user" },
];

const Navbar = () => {
	return (
		<header className='w-full'>
			<nav className='nav'>
				<Link
					href='/'
					className='flex items-center gap-1'
				>
					<Image
						src='/assets/icons/icons8-chat-bot-64.png'
						width={27}
						height={27}
						alt='logo'
					/>
					<p className='nav-logo'>
						Chat<span className='text-primary'>Bot</span>
					</p>
				</Link>
				<div className='flex items-center gap-5'>
					{navIcons.map((icon) => (
						<Image
							key={icon.alt}
							src={icon.src}
							width={28}
							height={28}
							alt={icon.alt}
							className='object-contain'
						/>
					))}
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
