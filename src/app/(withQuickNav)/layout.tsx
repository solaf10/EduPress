import QuickBar from "./components/QuickNav/QuickBar";

export default function QuickNavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <QuickBar />
      {children}
    </>
  );
}
