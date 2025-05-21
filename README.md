# Personal Portfolio Website

A modern and responsive portfolio website built with Next.js, featuring a dark/light theme toggle, smooth animations, and a clean design aesthetic.

![Portfolio Preview](public/work-1.png)

## Features

- 🎨 Modern UI/UX with responsive design
- 🌓 Dark/Light theme support
- ⚡ Fast performance with Next.js
- 🎭 Smooth animations and transitions
- 📱 Mobile-first approach
- 📧 Contact form functionality
- 💼 Project showcase section
- 📝 About me and services sections
- 🎯 Skills and expertise display

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- React Context for state management
- CSS Modules for styling
- Motion animations
- Responsive design principles

## Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/DanyalAnsari/Portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
app/
├── components/      # Reusable UI components
│   ├── About.js    # About section
│   ├── Contact.js  # Contact form
│   ├── Hero.js     # Hero section
│   └── Works.js    # Portfolio projects
├── context/        # React context providers
├── assets/         # Images and icons
└── public/         # Static files
```

## Customization

1. Update the personal information in respective components
2. Modify the theme colors in `globals.css`
3. Add your projects in the Works section
4. Update contact information in the Contact component
5. Customize the resume in `public/sample-resume.pdf`

## Deployment

The project is ready to be deployed on [Vercel](https://vercel.com) or any other hosting platform that supports Next.js applications.

```bash
npm run build
# or
yarn build
```

## License

This project is open source and available under the [MIT License](LICENSE).
