import "./globals.css";
import Head from 'next/head';
import type { Metadata, Viewport } from "next";

const APP_NAME = "Marinheiros Pedidos";
const APP_DEFAULT_TITLE = "Marinheiros Pedidos";
const APP_TITLE_TEMPLATE = "%s";
const APP_DESCRIPTION = ":)";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#3f2008",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Head>
        <meta name="mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"/>
        <meta name="viewport"
content="width=device-width; initial-scale=1; viewport-fit=cover"/>
      </Head>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          {children}

      </body> 
    </html>
  );
}
