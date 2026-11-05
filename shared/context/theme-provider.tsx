"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)
const THEME_CHANGE_EVENT = "portfolio-theme-change"

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "portfolio-ui-theme",
  ...props
}: ThemeProviderProps) {
  const subscribe = useCallback((onStoreChange: () => void) => {
    window.addEventListener("storage", onStoreChange)
    window.addEventListener(THEME_CHANGE_EVENT, onStoreChange)

    return () => {
      window.removeEventListener("storage", onStoreChange)
      window.removeEventListener(THEME_CHANGE_EVENT, onStoreChange)
    }
  }, [])

  const theme = useSyncExternalStore(
    subscribe,
    () => (localStorage.getItem(storageKey) as Theme | null) ?? defaultTheme,
    () => defaultTheme,
  )

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      window.dispatchEvent(new Event(THEME_CHANGE_EVENT))
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
