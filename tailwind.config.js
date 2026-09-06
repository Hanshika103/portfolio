/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0E1A2B',      // base background - blueprint navy
        surface: '#142238',   // card surface
        surface2: '#1B2C46',  // raised surface / hover
        line: '#28405F',      // hairline borders
        paper: '#EAF0F6',     // primary text
        steel: '#8CA0BC',     // muted text
        brass: '#E3B23C',     // accent - technical highlighter
        brassDim: '#B4893A',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(234,240,246,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(234,240,246,0.035) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      maxWidth: {
        prose: '72ch',
      },
    },
  },
  plugins: [],
}