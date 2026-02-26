import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        apple: {
          bg: '#FFFFFF',
          'bg-secondary': '#F5F5F7',
          'bg-tertiary': '#FBFBFD',
          'bg-grouped': '#F2F2F7',
          'text-primary': '#1D1D1F',
          'text-secondary': '#6E6E73',
          'text-tertiary': '#86868B',
          accent: '#007AFF',
          'accent-hover': '#0066D6',
        },
      },
      fontFamily: {
        system: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Arial', 'sans-serif'],
        cn: ['PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', 'sans-serif'],
      },
      fontSize: {
        'display': ['2.125rem', { lineHeight: '1.2', fontWeight: '700' }],   // 34px
        'title-1': ['1.75rem', { lineHeight: '1.2', fontWeight: '700' }],    // 28px
        'title-2': ['1.5rem', { lineHeight: '1.25', fontWeight: '600' }],    // 24px
        'title-3': ['1.25rem', { lineHeight: '1.3', fontWeight: '600' }],    // 20px
        'body-lg': ['1.0625rem', { lineHeight: '1.47', fontWeight: '400' }], // 17px
        'body': ['0.9375rem', { lineHeight: '1.47', fontWeight: '400' }],    // 15px
        'caption': ['0.8125rem', { lineHeight: '1.4', fontWeight: '400' }],  // 13px
        'footnote': ['0.6875rem', { lineHeight: '1.4', fontWeight: '400' }], // 11px
      },
      borderRadius: {
        'apple-sm': '0.375rem',  // 6px
        'apple-md': '0.625rem',  // 10px
        'apple-lg': '0.875rem',  // 14px
        'apple-xl': '1.25rem',   // 20px
      },
      boxShadow: {
        'apple-sm': '0 1px 2px rgba(0, 0, 0, 0.04)',
        'apple-md': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'apple-lg': '0 8px 28px rgba(0, 0, 0, 0.12)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        'content': '980px',
        'narrow': '680px',
        'site': '1200px',
      },
    },
  },
  plugins: [],
} satisfies Config;
