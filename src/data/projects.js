// Central project data.
// Every field here is sourced directly from the corresponding GitHub README.
// To add a new project, copy an object below and fill in verified details only.

const projects = [
  {
    id: 'bankguard-ai',
    title: 'BankGuard AI',
    subtitle: 'Banking Transaction Fraud Detection System',
    category: 'AI / Full Stack',
    featured: true,
    description:
      'An end-to-end AI and full-stack web application that flags potentially fraudulent banking transactions in real time, combining a Flask/FastAPI backend, a machine learning scoring layer and a MySQL-backed dashboard.',
    problem:
      'Rule-based fraud checks struggle to catch complex, evolving fraud patterns as digital banking transaction volumes grow.',
    solution:
      'A backend API accepts transaction details, runs them through a trained ML pipeline that combines anomaly detection with classification, stores the result in MySQL, and surfaces a risk score on a dashboard.',
    technicalImplementation:
      'The ML layer uses an Isolation Forest for anomaly detection alongside Logistic Regression for classification, exposed through a REST API. Predictions and risk scores are persisted to a MySQL "transactions" table and visualised on a JavaScript dashboard.',
    technologies: ['Python', 'Flask', 'FastAPI', 'Scikit-learn', 'Isolation Forest', 'Logistic Regression', 'MySQL', 'JWT', 'HTML', 'CSS', 'JavaScript', 'Chart.js'],
    features: [
      'Real-time fraud prediction via a REST /predict endpoint',
      'Risk scoring for every transaction',
      'MySQL storage of users, transactions and predictions',
      'JWT-based authentication for users/admin',
      'Interactive analytics dashboard (fraud vs. normal, risk distribution)',
    ],
    contribution:
      'Designed and built the full system end-to-end: ML pipeline (data prep, model training, evaluation), the Flask/FastAPI backend and routes, the MySQL schema, and the frontend dashboard.',
    github: 'https://github.com/Hanshika103/BankGuard-AI-Banking-Transaction-Fraud-Detection-System',
    liveDemo: null,
    image: null,
  },
  {
    id: 'ai-resume-analyzer',
    title: 'AI Resume Analyzer & Career Assistant',
    subtitle: 'Resume analysis, ATS scoring and interview prep',
    category: 'AI / Web',
    featured: true,
    description:
      'A web application that parses an uploaded resume, extracts skills, estimates an ATS (Applicant Tracking System) compatibility score, recommends suitable job roles and generates role-based interview questions.',
    problem:
      'Students and early job-seekers often have no visibility into how strong their resume is, which roles it suits, or how to prepare for interviews.',
    solution:
      'A Flask backend parses uploaded resumes (PDF/text), runs a custom NLP-based skill extractor and a rule-based scoring/recommendation engine, and returns feedback, an ATS score, job-role suggestions and interview questions to a simple HTML/CSS/JS frontend.',
    technicalImplementation:
      'Resume text is extracted with PyPDF2 and passed through dedicated services for skill extraction, ATS scoring, feedback generation, job-role recommendation and interview-question generation — each implemented as its own Flask backend module.',
    technologies: ['Python', 'Flask', 'PyPDF2', 'NLP', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Resume upload and text extraction (PDF/Text)',
      'Automatic technical & soft-skill extraction',
      'ATS compatibility score generation',
      'Strengths, weaknesses and improvement feedback',
      'Job-role recommendations based on extracted skills',
      'Role-based interview question generation',
    ],
    contribution:
      'Built the resume-parsing pipeline, the rule-based NLP scoring/recommendation logic, the Flask backend routes, and the HTML/CSS/JS frontend (upload, dashboard and results views).',
    github: 'https://github.com/Hanshika103/AI-Resume-Analyzer-Career-Assistant',
    liveDemo: 'https://ai-resume-analysis-job-creation.vercel.app',
    image: null,
  },
  {
    id: 'ai-medical-report-analyzer',
    title: 'AI Medical Report Analyzer',
    subtitle: 'ML-based health risk screening from report text',
    category: 'AI / Healthcare',
    featured: true,
    description:
      'A full-stack application that reads uploaded medical report text files, extracts key health parameters, and uses a trained Random Forest model to classify a patient as Low Risk or High Risk with a numeric risk score.',
    problem:
      'Manually screening medical reports for early risk signals is slow and inconsistent, especially at scale.',
    solution:
      'A Flask + Flask-CORS backend accepts a .txt medical report, uses regex-based NLP to pull out values such as glucose, blood pressure, cholesterol and age, feeds them into a trained Scikit-learn Random Forest model, and returns a risk classification and score to a JavaScript-driven dashboard.',
    technicalImplementation:
      'Text extraction and regex parsing convert unstructured report text into a structured feature vector, which is passed to a Random Forest Classifier (trained and serialized with Joblib) to output a binary risk label plus a percentage risk score.',
    technologies: ['Python', 'Flask', 'Flask-CORS', 'Scikit-learn', 'Random Forest', 'Pandas', 'NumPy', 'Joblib', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Upload medical reports in .txt format',
      'Regex-based extraction of glucose, blood pressure, cholesterol and age',
      'Random Forest-based risk classification (Low / High)',
      'Numeric risk score output',
      'Interactive results dashboard with Fetch API integration',
    ],
    contribution:
      'Developed the feature-extraction service, trained and integrated the Random Forest model, built the Flask API layer, and implemented the frontend upload/results dashboard.',
    github: 'https://github.com/Hanshika103/-AI-Medical-Report-Analyzer',
    liveDemo: 'https://medical-image-viewer-ai-classifier.vercel.app',
    image: null,
  },
  {
    id: 'ml-arena',
    title: 'ML Arena',
    subtitle: 'Intelligent machine learning benchmark platform',
    category: 'Machine Learning',
    featured: true,
    description:
      'An end-to-end machine learning platform that lets users upload a dataset, preprocess it, train multiple ML algorithms, compare their performance and export the results — all from an interactive Streamlit interface.',
    problem:
      'Comparing multiple ML algorithms on a new dataset usually means writing repetitive boilerplate for preprocessing, training and evaluation for every model.',
    solution:
      'A Streamlit application automates dataset analysis, missing-value handling, preprocessing and problem-type detection (classification vs. regression), then trains several Scikit-learn algorithms side by side and visualises comparative performance.',
    technicalImplementation:
      'Supports 8 algorithms across classification (Logistic Regression, Decision Tree, Random Forest, KNN, SVM) and regression (Linear Regression, Decision Tree, Random Forest), with metrics including Accuracy, Precision, Recall, F1, ROC curves for classification, and MAE/MSE/RMSE/R² for regression, rendered with Plotly and Matplotlib.',
    technologies: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'NumPy', 'Plotly', 'Matplotlib', 'Joblib', 'OpenPyXL'],
    features: [
      'CSV dataset upload with automatic analysis',
      'Missing-value handling and preprocessing',
      'Automatic classification/regression problem-type detection',
      'Training and comparison across 8 ML algorithms',
      'Interactive performance visualizations',
      'Export of trained models and evaluation reports',
    ],
    contribution:
      'Built the full Streamlit application: the preprocessing pipeline, the multi-model training/evaluation core, the visualization layer, and the model/report export functionality. Validated the platform on 4 representative datasets.',
    github: 'https://github.com/Hanshika103/ML-Arena',
    liveDemo: 'https://ml-arena-rcbqrgysmeyqtcfzzxtdob.streamlit.app/',
    image: null,
  },
  {
    id: 'patch-antenna-ai',
    title: 'Patch Antenna AI',
    subtitle: 'AI-driven inverse design for microstrip patch antennas',
    category: 'AI / RF Engineering',
    featured: true,
    description:
      'An AI-based inverse-design tool for rectangular microstrip patch antennas: given a target operating frequency and substrate parameters, an XGBoost model predicts the required antenna dimensions, visualised as an interactive 3D model.',
    problem:
      'Manually calculating patch antenna dimensions for a target frequency involves repetitive RF engineering formulas and iteration.',
    solution:
      'Users enter frequency, dielectric constant, substrate height, loss tangent, copper thickness and substrate material; a trained XGBoost regression model instantly predicts patch width/length and ground width/length, rendered as an interactive 3D antenna model with multiple camera views.',
    technicalImplementation:
      'Built during a DRDO (Defence Research and Development Organisation) summer internship. An XGBoost Regressor (benchmarked against Linear Regression and Random Forest using R², MAE and RMSE) predicts dimensions from engineering inputs; Plotly powers the 3D visualization; ReportLab generates downloadable design reports.',
    technologies: ['Python', 'Streamlit', 'XGBoost', 'Scikit-learn', 'Pandas', 'NumPy', 'Plotly', 'Matplotlib', 'Joblib', 'ReportLab'],
    features: [
      'AI-predicted patch, ground width and length from target frequency',
      'Interactive 3D antenna visualization with 360° rotation, zoom and pan',
      'Multiple camera views (top, front, side, isometric)',
      'Model comparison (Linear Regression vs. Random Forest vs. XGBoost)',
      'Downloadable CSV/PDF design reports',
    ],
    contribution:
      'Developed as part of a DRDO summer internship: built the ML pipeline for dimension prediction, and the interactive 3D visualization and reporting layer of the Streamlit application.',
    github: 'https://github.com/Hanshika103/Patch_antenna_ai',
    liveDemo: 'https://patchantennaai-hyk33pinnnpwawcpvnwyyo.streamlit.app/',
    image: null,
  },
  {
    id: 'studentstay',
    title: 'StudentStay',
    subtitle: 'Student accommodation discovery platform',
    category: 'Full Stack Web',
    featured: true,
    description:
      'A full-stack student housing platform for discovering, filtering and shortlisting PG (paying-guest) rooms and hostels across major Indian academic hubs, with a React front end and a PHP REST API backend.',
    problem:
      'Students relocating for college often lack a single, filterable place to compare verified PG/hostel listings by city, budget and sharing type.',
    solution:
      'A React + Bootstrap 5 client talks to a PHP REST API (PDO, session-based auth) backed by MySQL, offering dynamic search/filtering, a detailed property view with a gallery and a simulated map, and a persistent shortlist dashboard.',
    technicalImplementation:
      'Authentication uses bcrypt-hashed passwords via PHP\'s password_hash() with server-side sessions. The frontend fetches and filters listings asynchronously (city, budget slider, sharing type, keyword) without full page reloads, and a dedicated interest/shortlist endpoint toggles and lists saved properties per user.',
    technologies: ['React', 'Vite', 'Bootstrap 5', 'JavaScript (ES6+)', 'PHP', 'PDO', 'MySQL'],
    features: [
      'Registration/login with bcrypt-hashed passwords and session auth',
      'City, budget-range and sharing-type filtering with live updates',
      'Property detail view with image gallery and amenities badges',
      'Simulated interactive location map',
      '"My Shortlist" dashboard with real-time interest toggling',
    ],
    contribution:
      'Designed the database schema, built the PHP REST API (auth, properties, interest endpoints) and the React frontend components (search, filters, property details, shortlist).',
    github: 'https://github.com/Hanshika103/studentstay-accommodation-platform',
    liveDemo: 'https://studentstay-accommodation-platform.vercel.app/',
    image: null,
  },
  {
    id: 'food-order-management',
    title: 'Food Order Management System',
    subtitle: 'Desktop ordering app with admin & user roles',
    category: 'Software Development',
    featured: false,
    description:
      'A desktop food-ordering application built with Core Java and Java Swing, with separate user and admin flows for registration, menu browsing, ordering and menu management, backed by MySQL via JDBC.',
    problem:
      'Small food outlets often need a simple, structured desktop system to manage orders and menus without a full web stack.',
    solution:
      'A layered Java Swing application (UI, DAO, Model and Database packages) lets users register, browse the menu and place orders, while admins manage menu items and view incoming orders — all persisted to MySQL through JDBC using the DAO pattern.',
    technicalImplementation:
      'Follows a Model–DAO–UI–Database architecture. Database credentials are never hardcoded — the MySQL password is read from the DB_PASSWORD environment variable via System.getenv(), keeping secrets out of source control.',
    technologies: ['Java', 'Java Swing', 'MySQL', 'JDBC', 'OOP', 'DAO Pattern'],
    features: [
      'User registration, login and menu browsing',
      'Order placement and order-detail viewing',
      'Admin add/update/delete for menu items',
      'Admin order management view',
      'Environment-variable based DB credential handling',
    ],
    contribution:
      'Designed the layered architecture and implemented the DAO, model, UI (Swing frames) and database-connection layers.',
    github: 'https://github.com/Hanshika103/Food-Order-Management-System',
    liveDemo: null,
    image: null,
  },
  {
    id: 'mini-game-collection',
    title: 'All-in-One Mini Game',
    subtitle: 'Python GUI mini-game collection',
    category: 'Software Development',
    featured: false,
    description:
      'A collection of classic mini-games — Tic Tac Toe, Rock Paper Scissors, Snake and Treasure Hunt — built with Python and a Tkinter GUI to practice game logic, event handling and interface programming.',
    problem:
      'Beginners learning Python often need small, self-contained projects to practice loops, conditionals and event-driven UI code.',
    solution:
      'A single Python GUI application bundles four classic games behind one interface, each implemented with straightforward game-loop logic.',
    technicalImplementation:
      'Built with Python\'s Tkinter for the GUI, using event handlers to drive turn-based games (Tic Tac Toe, Rock Paper Scissors) and simple real-time loops (Snake).',
    technologies: ['Python', 'Tkinter', 'GUI Programming'],
    features: [
      'Tic Tac Toe — two-player strategy game',
      'Rock Paper Scissors — play against the computer',
      'Snake Game — classic grow-and-avoid gameplay',
      'Treasure Hunt — clue-based logic puzzle',
    ],
    contribution: 'Implemented all four games and the shared Tkinter GUI shell.',
    github: 'https://github.com/Hanshika103/All-in-one-Mini-Game-using-Python-GUI',
    liveDemo: null,
    image: null,
  },
  {
    id: 'online-voting-system',
    title: 'Online Voting System',
    subtitle: 'Console-based election simulation in C++',
    category: 'Software Development',
    featured: false,
    description:
      'A console-based election simulation built in C++ where users can register as voters, stand as candidates, cast a single vote each, and view live or final results.',
    problem:
      'Demonstrating a realistic election workflow — registration, candidacy, one-vote-per-user enforcement and results — in a constrained console environment.',
    solution:
      'An OOP-based menu-driven C++ program models voters and candidates as classes, enforces one vote per registered user, and tallies results on demand.',
    technicalImplementation:
      'Uses core OOP concepts (classes, objects, encapsulation) with a menu-driven control flow and basic session/logout handling to prevent duplicate voting.',
    technologies: ['C++', 'Object-Oriented Programming', 'DSA'],
    features: [
      'Voter registration and login',
      'Candidate registration (stand for election)',
      'Cast vote for a preferred candidate',
      'Live or final results view',
      'Duplicate-voting prevention',
    ],
    contribution: 'Designed and implemented the full console application, including the OOP class structure and voting-integrity logic.',
    github: 'https://github.com/Hanshika103/Online-Voting-System-using-c-',
    liveDemo: null,
    image: null,
  },
  {
    id: 'movie-booking-system',
    title: 'Online Movie Booking System',
    subtitle: 'Console-based ticket booking in C',
    category: 'Software Development',
    featured: false,
    description:
      'A console-based movie ticket booking system written in core C, simulating movie selection, show timings, seat availability, pricing and cancellations.',
    problem:
      'Practicing structured C programming (functions, arrays, structures) through a realistic, multi-step booking workflow.',
    solution:
      'A menu-driven C program walks a user through registration/login, browsing movies and showtimes, checking seat availability and pricing, and booking or cancelling tickets.',
    technicalImplementation:
      'Built with structured programming concepts — functions, arrays and structs — to represent movies, showtimes and bookings.',
    technologies: ['C', 'Structured Programming', 'Data Structures'],
    features: [
      'User registration and login',
      'View movies, showtimes and seat availability',
      'Ticket pricing lookup',
      'Ticket cancellation',
    ],
    contribution: 'Implemented the complete console application and its booking/cancellation logic.',
    github: 'https://github.com/Hanshika103/Online-Movie-Booking-System-using-C',
    liveDemo: null,
    image: null,
  },
  {
    id: 'salon-management-system',
    title: "Girl's Salon Management System",
    subtitle: 'DSA-driven salon booking system in C++',
    category: 'Software Development',
    featured: false,
    description:
      'A console-based salon management system focused on women\'s services, built in C++ to apply core Data Structures & Algorithms concepts to a realistic booking workflow.',
    problem:
      'Showing how fundamental data structures (queues, linked lists, stacks) solve real scheduling problems like waiting lists and booking history.',
    solution:
      'Users register, browse services, choose a branch and time slot, and receive an auto-generated bill; a linked-list-based waiting list and queue handle full slots and booking order.',
    technicalImplementation:
      'Uses arrays/vectors for services, users and bookings; a linked list for the waiting list; a queue for incoming booking requests; and searching/sorting algorithms for looking up and organizing bookings and price lists.',
    technologies: ['C++', 'Data Structures & Algorithms', 'OOP', 'Queue', 'Linked List'],
    features: [
      'User registration and login',
      'Service browsing and branch selection',
      'Time-slot appointment booking',
      'Discount application and automatic bill generation',
      'Waiting list for fully booked slots',
      'Booking cancellation',
    ],
    contribution: 'Designed the DSA-based booking engine (waiting list, queue, search/sort) and implemented the full console application.',
    github: 'https://github.com/Hanshika103/Girl-s-Salon-Management-System-using-DSA-concept',
    liveDemo: null,
    image: null,
  },
]

export default projects