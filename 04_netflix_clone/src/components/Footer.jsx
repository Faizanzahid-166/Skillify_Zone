// src/components/Footer.jsx

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 py-10 mt-10 text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
        <div>
          <h3 className="text-white mb-4 font-semibold">Company</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Press</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white mb-4 font-semibold">Help</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">FAQ</li>
            <li className="hover:underline cursor-pointer">Contact</li>
            <li className="hover:underline cursor-pointer">Terms of Use</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white mb-4 font-semibold">Media</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Newsroom</li>
            <li className="hover:underline cursor-pointer">Media Center</li>
            <li className="hover:underline cursor-pointer">Investor Relations</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white mb-4 font-semibold">Social</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Facebook</li>
            <li className="hover:underline cursor-pointer">Twitter</li>
            <li className="hover:underline cursor-pointer">YouTube</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-10">
        © 2025 Netflix UI Clone — Built for learning purposes.
      </div>
    </footer>
  );
};

export default Footer;
