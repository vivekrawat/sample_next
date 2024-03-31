import '@/app/ui/global.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col">
          {/* <div>gora pakora</div> */}
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
