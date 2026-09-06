// Personal/profile data — edit this file to update your info across the whole site.
// Fields marked with a `PLACEHOLDER_` style value are NOT real and must be replaced.

const profile = {
  name: 'Hanshika Mukati',
  role: 'Computer Science Engineering Student',
  tagline: 'Software Developer | Data Science & AI/ML Enthusiast',
  intro:
    "I'm a Computer Science Engineering student who enjoys building practical, end-to-end software — from desktop apps and full-stack platforms to machine learning tools. I like turning a real problem into a working system, one clean layer at a time.",

  // --- Replace these placeholders with your real links ---
  email: 'hanshikamukati10@gmail.com',
  phone: '+91 9109294288',
  linkedin: 'https://linkedin.com/in/hanshika-mukati',
  resumeUrl: 'Hanshika_Mukati_Resume.pdf',
  github: 'https://github.com/Hanshika103',

  about: [
    "I'm currently pursuing a B.Tech in Computer Science & Engineering, with a strong grounding in Data Structures & Algorithms, Object-Oriented Programming and DBMS.",
    'I enjoy building software across the stack — desktop apps in Java, full-stack web platforms with React and PHP/Flask, and applied ML systems, including an AI-driven antenna design tool built during a DRDO internship.',
    "I'm looking for internship and early-career opportunities in software development, data science or AI/ML, where I can keep building things that solve real problems.",
  ],

  skills: {
    'Programming Languages': ['C++', 'Java (Core)', 'Python', 'C', 'SQL'],
    'Web Development': ['HTML', 'CSS', 'JavaScript', 'React', 'Flask', 'PHP'],
    'Data Science / Machine Learning': [
      'NumPy',
      'Pandas',
      'Scikit-learn',
      'XGBoost',
      'Matplotlib',
      'Plotly',
      'Regression',
      'Classification',
      'Model Evaluation',
    ],
    Databases: ['MySQL', 'Oracle Database', 'MongoDB'],
    'Core Computer Science': ['Data Structures & Algorithms', 'Object-Oriented Programming', 'DBMS', 'Problem Solving'],
    'Tools & Platforms': ['Git', 'GitHub', 'Jupyter Notebook', 'Google Colab', 'Streamlit', 'NetBeans', 'XAMPP'],
  },

  experience: [
    {
      role: 'Summer Intern — AI-Based Patch Antenna Design',
      org: 'Defence Research and Development Organisation (DRDO), Jodhpur',
      period: 'June 2026 – July 2026',
      points: [
        'Developed an AI-driven inverse-design system for rectangular microstrip patch antennas using XGBoost to predict optimal antenna dimensions from a target operating frequency.',
        'Built an interactive 3D visualization for the predicted antenna design.',
        'Designed, simulated and fabricated a Vivaldi antenna using CST Studio Suite, evaluating performance via return loss (S11), radiation pattern, gain and bandwidth.',
      ],
      tech: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas', 'NumPy', 'Plotly', 'Streamlit', 'CST Studio Suite'],
    },
  ],

  education: [
    {
      degree: 'B.Tech, Computer Science & Engineering',
      school: 'Mody University of Science and Technology',
      period: '2024 – 2028',
      detail: 'CGPA: 9.47 / 10 · Core subjects: Data Structures & Algorithms, DBMS, Object-Oriented Programming',
    },
    {
      degree: 'Intermediate (Class XII)',
      school: 'Government H. Sec. School, Talwada Bujurg, M.P.',
      period: '2023 – 2024',
      detail: '92.8%',
    },
    {
      degree: 'Matriculation (Class X)',
      school: 'Government H. Sec. School, Talwada Bujurg, M.P.',
      period: '2021 – 2022',
      detail: '90.0%',
    },
  ],

  certifications: [
    {
      name: 'Full Stack Web Development Training',
      org: 'Internshala',
      date: '',
      link: '',
    },
    {
      name: 'GitHub Copilot Fundamentals',
      org: 'Microsoft',
      date: '',
      link: '',
    },
    {
      name: 'Machine Learning with Python Developer Certification',
      org: 'freeCodeCamp',
      date: '',
      link: '',
    },
  ],

  codingProfiles: [
    { name: 'GitHub', url: 'https://github.com/Hanshika103' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/HanshikaMukati/' },
    { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/profile/hanshikamchqp' },
    { name: 'CodeChef', url: 'https://www.codechef.com/users/goofy_shop_47' },
    { name: 'Codeforces', url: 'https://codeforces.com/profile/HanshikaMukati' },
  ],
}

export default profile