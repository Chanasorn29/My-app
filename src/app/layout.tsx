// app/layout.tsx

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="th">
        <head>
          <title>My App</title>
        </head>
        <body>
          {/* เพิ่ม header, navbar, ฯลฯ ที่นี่ */}
          <main>{children}</main>
        </body>
      </html>
    );
  }
  