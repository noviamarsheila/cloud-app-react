import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

function Navbar() {
	const [nav, setNav] = useState(false);

	const handleClick = () => {
		setNav(!nav);
	};

	return (
		<div className="w-screen h-[65px] bg-zinc-200 fixed drop-shadow-lg z-10">
			<div className="px-2 flex justify-between items-center w-full h-full">
				<div className="flex items-center">
					<h1 className="text-3xl font-bold ml-4 sm:text-4xl">Shell.</h1>
					<ul className="hidden md:flex">
						<li>Home</li>
						<li>About</li>
						<li>Support</li>
						<li>Platforms</li>
						<li>Pricing</li>
					</ul>
				</div>
				<div className="hidden md:flex pr-4">
					<button className="border-none bg-transparent text-black mr-4">Sign In</button>
					<button className="px-4 py-2 btn">Sign Up</button>
				</div>
				<div className="md:hidden mr-4" onClick={handleClick}>
					{/*  */}
					{!nav ? <MenuIcon className="w-8" /> : <XIcon className="w-8" />}
				</div>
			</div>

			<ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-4 md:hidden"}>
				<li className="border-b-2 border-zinc-300 w-full">Home</li>
				<li className="border-b-2 border-zinc-300 w-full">About</li>
				<li className="border-b-2 border-zinc-300 w-full">Support</li>
				<li className="border-b-2 border-zinc-300 w-full">Platforms</li>
				<li className="border-b-2 border-zinc-300 w-full">Pricing</li>
				<div className="flex flex-col my-4">
					<button className="bg-transparent text-indigo-600 px-4 py-3 mb-3">SIgn In</button>
					<button className="px-4 py-3">SIgn Up</button>
				</div>
			</ul>
		</div>
	);
}

export default Navbar;
