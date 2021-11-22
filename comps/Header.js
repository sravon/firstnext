import Link from 'next/link'

const Header = () => {
    return (
        <>
            
            <nav className="bg-gray-100">
                <div className="max-w-6xl mx-auto ">
                    <div className="flex justify-between">
                    
                    <div>
                        <Link href="/" ><a className="flex items-center py-4 px-3">
                            ...
                            <span className="font-bold">better dev</span>
                        </a></Link>
                    </div>
                    
                    <div className="hidden md:flex items-center space-x-3">
                        <Link href="/about"><a className="py-4 px-3 hover:bg-red-700">
                            About</a></Link>
                        
                    </div>
                        <div className="hidden md:flex items-center space-x-1">
                            <a href="" className="py-5 px-3 hover:bg-red-700">Login</a>
                            <a href="" className="py-5 px-3 bg-yellow-400 text-yellow-900 rounded hover:bg-yellow-300 hover:text-yellow-900 transition duration-300">Signup</a>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button className="mobile-menu-button">
                                ...
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mobile-menu hidden md:hidden">
                    <a href="" className="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
                    <a href="" className="block py-2 px-4 text-sm hover:bg-gray-200">pricing</a>
                </div>
            </nav>
        </>
    )
}
export default Header; 