export default function Loading() {
  return (
    <div className="space-y-6" aria-label="Loading meetings" role="status">
      <div className="h-5 w-32 animate-pulse rounded-full bg-blue-100" />
      <div className="h-14 w-3/4 animate-pulse rounded-2xl bg-slate-200" />
      <div className="grid gap-5"><div className="h-56 animate-pulse rounded-2xl bg-white shadow-sm" /><div className="h-56 animate-pulse rounded-2xl bg-white shadow-sm" /></div>
    </div>
  );
}
