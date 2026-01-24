export const STORAGE_KEYS = {
  SETTINGS: 'apticalc-settings',
  STATS: 'apticalc-stats',
} as const

export const KEYBOARD_SHORTCUTS = [
  { key: 'Ctrl + C', action: 'Calculator View' },
  { key: 'Ctrl + T', action: 'Test View' },
  { key: 'Escape', action: 'Close / Clear' },
  { key: 'H', action: 'Toggle Help' },
  { key: '?', action: 'Show Shortcuts' },
] as const
