export default function CreditStatusCard({
  children,
  label,
  count,
}: {
  children: React.ReactNode;
  label: string;
  count: number;
}) {
  return (
    <div className="w-full flex flex-col items-center gap-brand-sm rounded-brand-lg bg-card p-brand-md">
      <div className="flex flex-col items-center gap-brand-sm">
        <div className="w-6 aspect-square">{children}</div>
        <span className="paragraph-small-medium text-placeholder-text">{label}</span>
      </div>
      <span className="heading-4">{count}</span>
    </div>
  );
}
