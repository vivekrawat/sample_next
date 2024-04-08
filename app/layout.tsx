import '@/app/ui/global.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>RD Tracker</title>
      <meta name="description" content="this website is designed for tracking the monthly RD payments" />
      <meta name="keywords" content="RD, monthly RD, payment payment tracker" />
      {/* for cahnging icon */}
      <link rel="icon" href="https://cdn.iconscout.com/icon/premium/png-256-thumb/monthly-product-4811797-4022868.png" />
      <body>
        <div className="flex flex-col">
          {/* <div>gora pakora</div> */}
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
