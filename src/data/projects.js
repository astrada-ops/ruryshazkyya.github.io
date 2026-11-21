// Main projects, shown large in "Selected work", in this order.
//
//   images:    one or two { image, alt, fit?, position? }. `image` is a file name in
//              src/assets/images without .webp. fit: 'cover' (default) or 'contain'.
//   links:     { demo, source }. Leave '' to hide the button.
//   caseStudy: optional. When present, the project gets its own page at #/projects/<id>.
export const projects = [
  {
    id: 'ticketdesk',
    title: 'TicketDesk',
    meta: 'Front end project',
    summary:
      'An IT helpdesk dashboard built around one question: what is about to breach its SLA, and who is on it? Every open ticket shows a live SLA meter, and overdue ones are flagged.',
    points: [
      'Search, filters, sorting, and a ticket drawer with status, assignee, and activity log.',
      'Light and dark themes, responsive down to phones, and usable with a keyboard.',
      '26 unit tests cover the SLA, validation, and filtering logic.',
    ],
    tags: ['React', 'Vite', 'JavaScript', 'CSS'],
    images: [
      { image: 'ticketdesk', alt: 'TicketDesk dashboard with ticket queues and SLA meters', position: 'left top' },
    ],
    links: { demo: '', source: '' },
  },
  {
    id: 'daymark',
    title: 'Daymark',
    meta: 'Front end project',
    summary:
      'A personal planner for focused days. One sidebar brings together My Day, an inbox, all tasks, a calendar, projects, habits, a focus room, notes, and insights.',
    points: [
      'A task form with date, start and end time, priority, status, estimated duration, project, and category.',
      'Search and filters on the task list, with an option to hide finished tasks.',
    ],
    tags: ['Vite', 'JavaScript', 'CSS'],
    images: [{ image: 'daymark', alt: 'Daymark planner with its sidebar and the New Task form open' }],
    links: { demo: '', source: '' },
  },
  {
    id: 'web-information-system',
    title: 'Web-based information system',
    meta: 'Fullstack academic project',
    summary:
      'A responsive web application built with CodeIgniter 4, with user authentication and create, read, update, and delete features backed by MySQL.',
    points: [
      'Structured with the MVC architecture so it stays easy to maintain.',
      'Built authentication and CRUD features on a MySQL database.',
    ],
    tags: ['PHP', 'CodeIgniter 4', 'MySQL', 'MVC'],
    images: [{ image: 'codeigniter-app', alt: 'Form for adding a new category in the web application', fit: 'contain' }],
    links: { demo: '', source: '' },
  },
  {
    id: 'absensi-les-sempoa',
    title: 'Absensi Les Sempoa',
    meta: 'UI design in Figma',
    summary: 'Wireframes for an attendance app for an abacus (sempoa) course, designed for both phone and laptop.',
    points: [
      'Screens for the dashboard, session attendance, the student list and detail, adding a student, and the session schedule.',
      'Special cases drawn as their own screens: a holiday, inactive students, and a student absent eight times.',
    ],
    tags: ['Figma', 'Wireframing', 'Responsive layouts'],
    images: [
      {
        image: 'sempoa-wireframe',
        alt: 'Figma canvas with phone and laptop wireframes for the attendance app',
        position: 'center top',
        tall: true,
      },
    ],
    links: { demo: '', source: '' },
  },
  {
    id: 'eog-keyboard',
    title: 'Virtual keyboard controlled by eye movement',
    meta: 'Final project, 2025',
    summary:
      'An assistive keyboard for people with limited motor function. It reads electrooculography (EOG) signals from eye movements and blinks, and a K-Nearest Neighbors model turns them into key presses.',
    points: [
      'Designed the system architecture and collected the EOG data.',
      'Built and evaluated the KNN classifier in Python.',
      'Connected the model to the on-screen keyboard.',
    ],
    tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Arduino'],
    images: [
      { image: 'eog-setup', alt: 'Laptop showing EOG signal plots, with electrodes and an Arduino board connected' },
      { image: 'eog-scatter', alt: 'Scatter plot of EOG signals separating upward glances from blinks', fit: 'contain' },
    ],
    links: { demo: '', source: '' },
    caseStudy: {
      eyebrow: 'Final project, Institut Teknologi Padang',
      lead: 'A virtual keyboard based on electrooculography (EOG), using K-Nearest Neighbors to turn eye movements and blinks into key presses.',
      facts: [
        { label: 'Year', value: '2025' },
        { label: 'Type', value: 'Final project, research' },
        { label: 'Stack', value: 'Python, Scikit-learn, Arduino' },
      ],
      cover: {
        image: 'eog-setup',
        alt: 'Laptop showing live EOG signal plots, with electrodes and an Arduino board connected on the desk',
      },
      sections: [
        {
          title: 'Overview',
          text: 'The system reads EOG signals from eye movements and blinks, so a user can move through the keyboard and pick characters without touching a physical keyboard. A K-Nearest Neighbors model classifies each signal and turns it into a keyboard command.',
        },
        {
          title: 'Objective',
          text: 'To give people with limited motor function another way to communicate, by recognising eye-movement patterns with EOG signals and machine learning.',
        },
      ],
      role: [
        'Designed the overall system architecture.',
        'Collected and preprocessed the EOG signal data.',
        'Built the KNN classification model in Python.',
        'Evaluated how well the model performed.',
        'Connected the model to the virtual keyboard interface.',
        'Documented the research findings.',
      ],
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Arduino', 'Jupyter Notebook', 'Serial communication'],
      figure: {
        image: 'eog-scatter',
        alt: 'Scatter plot of EOG signals on horizontal and vertical channels, with upward glances and blinks forming separate clusters',
        title: 'Telling signals apart',
        text: 'Each point is one EOG sample, placed by its horizontal and vertical channel. Upward glances (Atas) and blinks (Kedip) fall into separate clusters, which is what lets the KNN model tell them apart.',
      },
    },
  },
  {
    id: 'ebazaar-test-cases',
    title: 'Test cases for an Ebazaar spec revision',
    meta: 'QA work, PT Visionet Data International, 2026',
    summary:
      'When the Functional Specification Document (FSD) for Ebazaar’s Emergency Approval feature was revised, I wrote test cases for exactly what changed, alongside an impact analysis and API tests.',
    points: [
      'Positive, negative, and boundary scenarios, each with precondition, steps, test data, expected result, and priority.',
      'Covered the new aging rule, the 08:00 reminder email, and the switch at midnight when aging moves from -1 to 0.',
      'Separate sheets for impact analysis, API tests, and API security tests.',
    ],
    tags: ['Test case design', 'Regression testing', 'Boundary testing', 'API testing'],
    images: [
      {
        image: 'ebazaar-testcases',
        alt: 'Spreadsheet of revised test cases with scenario, precondition, steps, test data, expected result, type, and priority',
        position: 'left top',
      },
    ],
    links: { demo: '', source: '' },
  },
  {
    id: 'digidesa-testing',
    title: 'Black box testing for Digidesa',
    meta: 'Internship project, PT Solusi Data Madani, 2024',
    summary:
      'I tested the Digidesa web application from the user’s side to confirm every feature met its functional requirements before deployment.',
    points: [
      'Designed test cases from the functional requirements.',
      'Ran positive and negative scenarios across several modules.',
      'Documented bugs in detailed test reports for the developers.',
    ],
    tags: ['Black box testing', 'Test case design', 'Bug reporting'],
    images: [
      { image: 'digidesa-login', alt: 'Digidesa sign-in page with the first test case below it', fit: 'contain' },
      {
        image: 'digidesa-testcases',
        alt: 'Test case table with scenarios, expected results, and Valid outcomes',
        position: 'center top',
      },
    ],
    links: { demo: '', source: '' },
  },
];

// Smaller projects, shown as cards under "More projects".
export const moreProjects = [
  {
    id: 'kayne-playlist',
    title: 'Kayne music playlist',
    summary:
      'A playlist page with a track list, a lyrics panel, and a player bar with shuffle, repeat, skip, progress, and volume.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: { image: 'kayne-playlist', alt: 'Kayne playlist page with a track list, lyrics panel, and player bar', position: 'left top' },
  },
  {
    id: 'egg-incubator',
    title: 'Smart egg incubator',
    summary: 'An IoT incubator that reads temperature sensors and controls the heater to keep incubation stable.',
    tags: ['IoT', 'Arduino'],
    image: { image: 'egg-incubator', alt: 'Arduino board wired to a breadboard with LEDs' },
  },
  {
    id: 'padang-map',
    title: 'Padang City digital map',
    summary: 'A digital map of Padang City made in QGIS, with layer management and spatial analysis.',
    tags: ['QGIS', 'Spatial data'],
    image: { image: 'padang-map', alt: 'Map of Padang City in QGIS with marked places and distance lines' },
  },
  {
    id: 'medical-dashboard',
    title: 'Medical data dashboard',
    summary: 'An Excel dashboard that explores how blood types relate to medical conditions.',
    tags: ['Excel', 'Pivot tables'],
    image: { image: 'medical-dashboard', alt: 'Excel pivot table and pie chart of medical conditions by blood type' },
  },
];
