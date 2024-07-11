import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

function Footer() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return (
        <footer className="relative left-0 bottom-0 w-full py-5 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 px-5 sm:px-20">
            <section className="text-center sm:text-left text-lg mb-4 sm:mb-0">
                Copyright {year} | All rights reserved
            </section>
            <section className="flex items-center justify-center gap-5 text-2xl">
                <a href="https://github.com/Raghibjamil" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-all ease-in-out duration-300">
                    <BsGithub />
                </a>
                <a href="https://www.instagram.com/raghibj11" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-all ease-in-out duration-300">
                    <BsInstagram />
                </a>
                <a href="https://www.linkedin.com/in/raghib-jamil-46a73326a/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-all ease-in-out duration-300">
                    <BsLinkedin />
                </a>
            </section>
        </footer>
    );
}

export default Footer;
