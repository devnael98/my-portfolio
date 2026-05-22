import ThemeToggle from "./ThemeToggle/ThemeToggle";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full h-16 dark:border-b-gray-400 flex items-center justify-between px-8 shadow-xl z-50" hidden>
    {/* اللوجو - دائري تماماً وبحجم مثالي */}
    <div className="flex items-center">
        <div className="w-10 h-10 rounded-full border-2 border-slate-500 overflow-hidden shadow-inner flex items-center justify-center bg-slate-700">
            <img src="/assets/logo.jpeg" alt="Logo" className="w-full h-full object-cover" />
        </div>
    </div>
    
    {/* روابط التنقل - في المنتصف تماماً مع تأثيرات */}
    <nav className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-8 text-sm font-semibold tracking-wide">
        <a href="#im-hero" className="relative text-black dark:text-white group transition-colors duration-300 py-1 px-3 bg-gray-100 dark:bg-gray-800 rounded-xl">
            I'm Hero
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="#about" className="relative text-black dark:text-white group  transition-colors duration-300 py-1 px-3 bg-gray-100 dark:bg-gray-800 rounded-xl">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="#skills" className="relative text-black dark:text-white group  transition-colors duration-300 py-1 px-3 bg-gray-100 dark:bg-gray-800 rounded-xl">
            Skills
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="#experience" className="relative text-black dark:text-white group  transition-colors duration-300 py-1 px-3 bg-gray-100 dark:bg-gray-800 rounded-xl">
            Experience
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="#projects" className="relative text-black dark:text-white group  transition-colors duration-300 py-1 px-3 bg-gray-100 dark:bg-gray-800 rounded-xl">
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="#contact" className="relative text-black dark:text-white group  transition-colors duration-300 py-1 px-3 bg-gray-100 dark:bg-gray-800 rounded-xl">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
        </a>
    </nav>

    {/* زر الثيم - على اليمين مع بعض المساحة */}
    <div className="flex items-center gap-2">
        <div className="p-2.5 rounded-xl  transition-colors cursor-pointer">
            <ThemeToggle />
        </div>
    </div>
</header>
    );
}