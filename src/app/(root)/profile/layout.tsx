import Naber from "@/components/Navber";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return(
    <body>
        <header className="sticky top-0 ">
            <Naber />
         </header>
         {children}
    </body>
  );
}