// Experience, newest first. Mark at most one job as current.
export const experience = [
  {
    id: 'visionet',
    period: 'Aug 2026 to present',
    place: 'Current internship',
    role: 'QA Engineer Intern',
    company: 'PT Visionet Data International',
    current: true,
    points: [
      'Test MDS Retailing’s web applications against each Functional Specification Document (FSD).',
      'Currently responsible for Ebazaar, Espace, and Supplier Portal.',
    ],
  },
  {
    id: 'solusi-data-madani',
    period: 'Jul 2024 to Sep 2024',
    place: 'Pekanbaru, Indonesia',
    role: 'Software Testing Intern',
    company: 'PT Solusi Data Madani',
    points: [
      'Ran functional and regression tests from test scenarios across application modules.',
      'Analyzed results to find recurring bugs and areas to improve.',
      'Reported bugs to the developers and checked that fixes met the requirements.',
    ],
  },
];

export const skillGroups = [
  { id: 'web', name: 'Front end and web', items: ['HTML and CSS', 'JavaScript', 'React.js', 'PHP', 'CodeIgniter 4', 'MySQL'] },
  {
    id: 'testing',
    name: 'Testing',
    items: [
      'Manual testing',
      'Black box testing',
      'Regression testing',
      'Test case design',
      'Bug reporting',
      'Test documentation',
      'API testing',
      'Jest',
    ],
  },
  {
    id: 'data',
    name: 'Data and machine learning',
    items: ['Python', 'SQL', 'Pandas', 'NumPy', 'Scikit-learn', 'Excel', 'Power BI', 'Looker Studio'],
  },
  {
    id: 'tools',
    name: 'Tools, mobile, and hardware',
    items: ['Git and GitHub', 'Figma', 'VS Code', 'Kotlin (Android Studio)', 'C# (Unity)', 'Arduino'],
  },
];

export const education = {
  period: '2021 to 2025',
  degree: 'Bachelor of Informatics Engineering',
  school: 'Institut Teknologi Padang',
  gpa: 'GPA 3.48 out of 4.00',
  text: 'Projects in software development, machine learning, software testing, and technical documentation, ending with the EOG virtual keyboard as my final project.',
  photo: { image: 'campus-itp', alt: 'Institut Teknologi Padang campus building' },
};

export const certificates = [
  {
    id: 'looker-studio',
    title: 'Data Visualization with Looker Studio',
    issuer: 'MySkill, 2026',
    image: { image: 'cert-looker-studio', alt: 'MySkill certificate for Data Visualization with Looker Studio' },
  },
  {
    id: '1000-startup',
    title: '1000 Startup Digital Roadshow',
    issuer: 'Kominfo, 2023',
    image: { image: 'cert-1000-startup', alt: 'Certificate of participation for the 1000 Startup Digital roadshow' },
  },
  {
    id: 'kreativitas',
    title: 'Revolusi Kreativitas Duo Hebat di Dunia Digital',
    issuer: 'Institut Teknologi Padang, 2023',
    image: { image: 'cert-kreativitas', alt: 'Seminar certificate, Revolusi Kreativitas Duo Hebat di Dunia Digital' },
  },
  {
    id: 'mental-health',
    title: 'Mental Health: Why It Matters',
    issuer: 'UGM, 2024',
    image: { image: 'cert-mental-health', alt: 'Certificate for the Mental Health: Why It Matters seminar' },
  },
];
