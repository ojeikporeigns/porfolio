"use client";

import { ThemeProvider } from "next-themes";
import { SmoothScroll } from "./effects/smooth-scroll";
import { CustomCursor } from "./effects/custom-cursor";
import { ScrollProgress } from "./effects/scroll-progress";
import { LoadingScreen } from "./effects/loading-screen";
import { CommandPalette } from "./layout/command-palette";
import { CookieConsent } from "./layout/cookie-consent";
import { BackToTop } from "./layout/back-to-top";
import { FloatingContact } from "./layout/floating-contact";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <LoadingScreen />
      <SmoothScroll />
      <ScrollProgress />
      <CustomCursor />
      <CommandPalette />
      {children}
      <FloatingContact />
      <BackToTop />
      <CookieConsent />
    </ThemeProvider>
  );
}
