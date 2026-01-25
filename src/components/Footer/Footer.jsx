



const Footer = () => {
  return (
    <footer className="w-full mt-16 pb-12">
      {/* Top divider */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60" />
     

      <div className="bg-gradient-to-b from-[#0b001a] to-[#05000d] px-4 py-6">
        <div className="max-w-6xl mx-auto text-center space-y-1">
          <p className="text-xs sm:text-sm text-gray-400">
            {/* © 2026 <span className="text-gray-200 font-medium">Gayatri Vishwakarma</span>. All rights reserved. */}
            © {new Date().getFullYear()} <span className="text-gray-200 font-medium">Gayatri Vishwakarma</span>.. All rights reserved.
          </p>

          <p className="text-[11px] sm:text-xs text-gray-500">
            MERN Stack Developer | MCA Student
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;