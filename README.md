# My Anime List

A responsive React application that displays a sortable list of anime shows with their details. Built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- Responsive design that works on all device sizes
- Sortable table columns for easy organization
- Neon color scheme with blue, orange, purple, and pink highlights
- Status indicators with color coding
- Streamer information with color coding

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Yarn

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/my-anime-list.git
cd my-anime-list
```

2. Install dependencies:
```bash
yarn
```

3. Start the development server:
```bash
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Deployment

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the main branch. The GitHub Actions workflow will:

1. Check out the code
2. Set up Node.js
3. Install dependencies
4. Build the project
5. Deploy to the gh-pages branch

To set up deployment:

1. Push your code to a GitHub repository
2. Ensure the repository has GitHub Pages enabled in the repository settings
3. Set the GitHub Pages source to the gh-pages branch
4. Push changes to the main branch to trigger deployment

## Customization

- Add or modify anime entries in `src/data/animeData.ts`
- Adjust the color scheme in `tailwind.config.js`
- Modify the table columns in `src/components/AnimeTable.tsx`

## License

MIT
