<p align="center">
  <picture>
    <img style="max-width:200px;height:auto"  src="https://www.rewindtty.dev/assets/logo.png" alt="rewindtty logo">
  </picture>
</p>

# RewindTTY Browser Player

A modern web-based player for RewindTTY terminal session recordings with advanced playback controls and interactive features.

## Features

- **Terminal Playback**: View recorded terminal sessions with authentic terminal rendering using xterm.js
- **Playback Controls**: Play, pause, restart, and variable speed playback (0.5x - 3x)
- **Interactive Timeline**: Click to seek, drag to scrub, mouse wheel to fine-tune position
- **Command Markers**: Visual markers on timeline showing when each command was executed
- **Bookmarks**: Add named bookmarks to quickly jump to specific moments
- **Command Sidebar**: Browse and jump to any command in the session
- **Keyboard Shortcuts**: Space (play/pause), R (restart), B (add bookmark)
- **Responsive Design**: Works on desktop and mobile devices

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rewindtty-browser-player
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Usage

1. Open the application in your browser
2. Select a RewindTTY JSON file using the file picker
3. Use the playback controls to navigate through the session:
   - **Play/Pause**: Click the play button or press Space
   - **Restart**: Click restart button or press R
   - **Speed Control**: Click speed button to cycle through speeds
   - **Timeline**: Click anywhere to seek, drag to scrub
   - **Bookmarks**: Press B to add bookmark, click bookmarks to jump
   - **Commands**: Click command list button to view all commands

## JSON Format

The player expects RewindTTY JSON files with the following structure:

```json
[
  {
    "command": "ls -la",
    "start_time": 1234567890,
    "end_time": 1234567895,
    "duration": 5.0,
    "chunks": [
      {
        "time": 0.1,
        "size": 1024,
        "data": "terminal output data"
      }
    ]
  }
]
```

## Technical Details

- **Framework**: Vanilla TypeScript with Vite
- **Terminal**: xterm.js with fit addon for responsive terminals
- **Styling**: Custom CSS with modern design
- **Storage**: LocalStorage for bookmark persistence

## Keyboard Shortcuts

- `Space`: Toggle play/pause
- `R`: Restart playback
- `B`: Add bookmark at current position

## Browser Compatibility

- Modern browsers with ES6+ support
- Chrome 60+, Firefox 55+, Safari 12+, Edge 79+

## Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## License

[Add your license information here]
