export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6 mt-10">
      {/* Top Border */}
      <div className="border-t border-white/10 w-full mb-6"></div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-5 px-6">

        {/* Social Links */}
        <div className="flex items-center gap-8 text-sm">
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Facebook
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          Intent © 2024
        </p>
      </div>
    </footer>
  );
}
