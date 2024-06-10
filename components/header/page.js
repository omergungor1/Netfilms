import Link from 'next/link';

const HeaderBar = () => {
    return (
        <div className="p-5 bg-purple-400 absolute top-0 font-semibold w-screen flex flex-row justify-between">
            <h1>Welcome to NetFilms</h1>
            <nav className="">
                <ul className="flex flex-row gap-x-4">
                    <Link href="/"><li className="hover:opacity-60 hover:bg-purple-600 rounded-md p-2 cursor-pointer hover:text-white">Home</li></Link>
                    <li className="hover:opacity-60 hover:bg-purple-600 rounded-md p-2 cursor-pointer hover:text-white"><a href="/">Movies</a></li>
                    <li className="hover:opacity-60 hover:bg-purple-600 rounded-md p-2 cursor-pointer hover:text-white"><a href="/">TV Shows</a></li>
                    <Link href="/about"><li className="hover:opacity-60 hover:bg-purple-600 rounded-md p-2 cursor-pointer hover:text-white">About</li></Link>
                    <li className="hover:opacity-60 hover:bg-purple-600 rounded-md p-2 cursor-pointer hover:text-white"><a href="/">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default HeaderBar;