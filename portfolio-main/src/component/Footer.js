export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-white/10 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">

        <p>© {new Date().getFullYear()} Amit Mishra. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="https://github.com/amitm256" target="_blank" className="hover:text-emerald-500">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/amit-mishra-137948134/" target="_blank" className="hover:text-emerald-500">
            LinkedIn
          </a>
          <a href="mailto:Amitm256@gmail.com" className="hover:text-emerald-500">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}