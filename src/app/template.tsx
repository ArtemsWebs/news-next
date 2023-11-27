export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="rootTemplate">{children}</div>;
}
