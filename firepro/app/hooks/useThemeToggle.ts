import { useTheme } from "next-themes";
import { useEffect, useState, useCallback } from "react";

export function useThemeToggle() {
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    
    // Log for debugging
    console.log("Toggling theme:", {
      currentTheme: theme,
      resolvedTheme,
      newTheme,
      htmlClass: document.documentElement.className
    });
    
    // Set the theme via next-themes - it handles class changes
    setTheme(newTheme);
    
    // Force immediate update - sometimes next-themes is slow
    requestAnimationFrame(() => {
      console.log("After toggle:", {
        htmlClass: document.documentElement.className,
        localStorage: localStorage.getItem("firepro-theme")
      });
    });
  }, [resolvedTheme, setTheme, theme]);

  // Debug: log theme state changes
  useEffect(() => {
    if (mounted) {
      console.log("Theme state changed:", { 
        theme, 
        resolvedTheme, 
        systemTheme,
        htmlClass: document.documentElement.className 
      });
    }
  }, [theme, resolvedTheme, systemTheme, mounted]);

  return {
    theme,
    setTheme,
    resolvedTheme,
    systemTheme,
    toggleTheme,
    mounted,
    isDark: mounted ? resolvedTheme === "dark" : false,
  };
}
