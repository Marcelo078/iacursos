import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				// Text Colors
				'text-hero': 'hsl(var(--text-hero))',
				'text-secondary': 'hsl(var(--text-secondary))',
				'text-muted': 'hsl(var(--text-muted))',
				
				// Surface Colors
				surface: 'hsl(var(--surface))',
				'surface-hover': 'hsl(var(--surface-hover))',
				
				// Brand Colors
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				
				// Card System
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				
				// Borders
				border: 'hsl(var(--border))',
				'border-light': 'hsl(var(--border-light))',
				
				// Gradient Colors for components
				'gradient-primary-start': 'hsl(var(--gradient-primary-start))',
				'gradient-primary-end': 'hsl(var(--gradient-primary-end))',
				'gradient-secondary-start': 'hsl(var(--gradient-secondary-start))',
				'gradient-secondary-end': 'hsl(var(--gradient-secondary-end))',
				'gradient-accent-start': 'hsl(var(--gradient-accent-start))',
				'gradient-accent-end': 'hsl(var(--gradient-accent-end))'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
