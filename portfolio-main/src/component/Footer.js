export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-white/10 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">

        <p>© {new Date().getFullYear()} Arun Singh. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="https://github.com/arunsin0211-dev" target="_blank" className="hover:text-emerald-500">
            GitHub
          </a>
          <a href="https://linkedin.com/in/arun-singh-775148407/" target="_blank" className="hover:text-emerald-500">
            LinkedIn
          </a>
          <a href="mailto:Arunsin0211@gmail.com" className="hover:text-emerald-500">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}