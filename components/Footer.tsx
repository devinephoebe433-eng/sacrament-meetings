export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white print:hidden">
      <div className="page-shell flex flex-col gap-2 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>Prepared with care for Maple Grove Ward.</p>
        <p className="font-semibold text-slate-400">Sunday Order · 2026</p>
      </div>
    </footer>
  );
}
