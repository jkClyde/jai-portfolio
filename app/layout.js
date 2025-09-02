import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Jirah Portfolio",
  description: "FullPage.js scrolling in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* fullPage.js CSS via CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.min.css"
        />
      </head>
      <body>
        {children}

        {/* fullPage.js script */}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.min.js" />
      </body>
    </html>
  );
}
