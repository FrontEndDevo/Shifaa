// Next.js:
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Google Fonts:
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import "./globals.css";

// Shadcn:
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toast";

import { ThemeProvider } from "@/components/providers/theme-provider";

// React Query:
import { QueryProvider } from "@/components/providers/query-provider";

// Next intl:
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Shifaa",
  description:
    "A healthcare patient management System designed to streamline patient registration, appointment scheduling, and medical records management for healthcare providers.",
  icons: {
    icon: "/assets/icons/shifaa-icon.png",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning={true}
    >
      <body
        suppressHydrationWarning={true}
        className={cn(
          "min-h-screen bg-page font-sans antialiased",
          fontSans.variable,
        )}
      >
        <NextIntlClientProvider>
          <QueryProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem={false}
            >
              {children}
              <Toaster />
            </ThemeProvider>
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
