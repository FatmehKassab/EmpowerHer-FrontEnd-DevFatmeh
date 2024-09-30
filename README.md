Installation Instructions for EmpowerHer Project

-pull from master
-npm install to install all nodes modules and packages
-npm start to start your app


Project Structure
The project follows a specific architecture for better organization and maintainability:

empowerher/
├── public/                # Contains favicon and HTML file
│  
├── src/                   # The main application folder
│   ├── api/               # Contains functions for API routes, organized by name for reusability
│       ├── auth/          # Sign-in and authorization APIs
│       ├── data/          # Data fetching APIs
│
│   ├── assets/            # Contains project images
│       ├── images/        # All images used in the project
│
│   ├── components/        # Reusable components
│       ├── common/        # Common components used across the project (e.g., buttons, tables)
│       ├── MetricBox.tsx  # Specific component 
│
│   ├── hooks/             # Custom hooks for data fetching
│
│   ├── pages/             # Each page has its own folder named after the page
│
│   ├── types/             # Type definitions for functions; import where needed to clarify API routes
│
│   ├── utils/             # Utility functions and configurations
│       ├── theme.js       # Theme colors for charts; update here to change colors
│
│   ├── App.tsx            # Main component for layout and routing
│   ├── index.tsx          # Entry point for the application
│   ├── react-app-env.d.ts  # TypeScript environment configurations
│   ├── tailwind.css       # Tailwind CSS styles for reusable classes 
├── .env                   # Environment variables for secure URLs and backend connection
├── .gitignore             
├── package-lock.json      
├── package.json           
├── README.md              # Project documentation
├── tailwind.config.js     # Tailwind CSS configuration for colors, backgrounds, and custom styles
├── tsconfig.json          # TypeScript configuration file





