import { ProjectData, Publication, Experience, Education } from './types';

export const projects: ProjectData[] = [
  {
    id: 'cancer-diagnosis',
    title: 'Personalized Cancer Diagnosis Research',
    abstract: 'Machine learning system for cancer diagnosis with strict HIPAA and GDPR compliance, achieving 92% diagnostic accuracy.',
    category: 'AI/ML',
    problemStatement: 'Develop a secure, compliant AI system for personalized cancer diagnosis that maintains patient data privacy while delivering accurate diagnostic predictions.',
    methodology: 'Implemented ETL workflows for automated data cleansing and anomaly detection, utilized Python-based machine learning models, established centralized data repositories with Role-Based Access Control (RBAC), and integrated comprehensive data lineage tracking.',
    compliance: {
      regulations: ['HIPAA', 'GDPR'],
      measures: [
        'Role-Based Access Control (RBAC) implementation',
        'Automated data validation pipelines',
        'Secure ETL workflows with audit trails',
        'Centralized data repositories with encryption',
        'Data lineage tracking and documentation'
      ]
    },
    results: {
      metrics: [
        { label: 'Diagnostic Accuracy', value: '92%' },
        { label: 'Regulatory Compliance', value: 'HIPAA, GDPR' },
        { label: 'Data Security', value: 'Enterprise-grade RBAC' }
      ],
      impact: 'Successfully deployed a machine learning system that balances high diagnostic accuracy with stringent data protection requirements, enabling secure healthcare analytics.'
    },
    techStack: ['Python', 'Machine Learning', 'ETL Pipelines', 'RBAC', 'Data Governance'],
    githubUrl: '',
    learnings: 'Gained deep understanding of regulatory compliance in healthcare data systems, learned to balance model performance with security requirements, and mastered data governance frameworks.',
    featured: true
  },
  {
    id: 'fraud-detection',
    title: 'Fraud Detection System',
    abstract: 'Enterprise fraud detection system enhancing financial data integrity by 45% through automated validation and data lineage tracking.',
    category: 'Data Governance',
    problemStatement: 'Build a robust fraud detection system that ensures financial data integrity and maintains complete audit trails for regulatory compliance.',
    methodology: 'Developed automated data validation frameworks, implemented comprehensive data lineage tracking, created real-time anomaly detection algorithms, and established cross-functional collaboration workflows between technical and business teams.',
    compliance: {
      regulations: ['Financial Regulatory Standards'],
      measures: [
        'Automated data validation and cleansing',
        'Complete data lineage tracking',
        'Real-time anomaly detection',
        'Audit trail generation',
        'Cross-functional compliance workflows'
      ]
    },
    results: {
      metrics: [
        { label: 'Data Integrity Enhancement', value: '45%' },
        { label: 'Automated Validation', value: 'Real-time' },
        { label: 'Audit Coverage', value: '100%' }
      ],
      impact: 'Significantly improved financial data integrity through automated processes, enabling better risk management and regulatory compliance in enterprise financial systems.'
    },
    techStack: ['Python', 'Data Validation', 'Data Lineage', 'Anomaly Detection', 'Statistical Modeling'],
    githubUrl: '',
    learnings: 'Developed expertise in building production-grade data governance systems, learned to bridge technical and non-technical stakeholder requirements, and mastered financial data integrity frameworks.',
    featured: true
  },
  {
    id: 'rdpms-faults-analysis',
    title: 'RDPMS Faults Analysis & Predictive Maintenance',
    abstract: 'Data analytics system for Remote Diagnostics & Predictive Maintenance, reducing system downtime through Power BI dashboards and trend analysis.',
    category: 'Business Intelligence',
    problemStatement: 'Analyze fault patterns in Remote Diagnostics & Predictive Maintenance Systems (RDPMS) to identify trends, anomalies, and predict system failures before they occur.',
    methodology: 'Applied data analytics techniques to sensor and log data, built interactive Power BI dashboards for real-time monitoring, performed statistical analysis for trend identification, and developed predictive models to forecast maintenance needs.',
    results: {
      metrics: [
        { label: 'System Downtime Reduction', value: 'Significant' },
        { label: 'Dashboard KPIs', value: 'Real-time' },
        { label: 'Fault Detection', value: 'Automated' }
      ],
      impact: 'Enabled proactive maintenance strategies through data-driven insights, reducing unplanned downtime and improving operational efficiency of critical systems.'
    },
    techStack: ['Power BI', 'Data Analytics', 'Statistical Modeling', 'Grafana', 'MySQL'],
    githubUrl: '',
    learnings: 'Mastered business intelligence tools for industrial applications, learned to translate complex technical data into actionable business insights, and developed expertise in predictive maintenance modeling.',
    featured: true
  },
  {
    id: 'fslakws',
    title: 'Few-Shot Language-Agnostic Keyword Spotting (FSLAKWS)',
    abstract: 'Advanced keyword spotting system with multilingual capabilities and few-shot learning, designed for scalability and enterprise deployment.',
    category: 'AI/ML',
    problemStatement: 'Develop a keyword spotting system that can recognize keywords across multiple languages with minimal training data, suitable for enterprise-scale deployment.',
    methodology: 'Implemented few-shot learning algorithms, designed language-agnostic feature extraction pipelines, integrated system monitoring for production deployment, and optimized for scalability.',
    results: {
      metrics: [
        { label: 'Language Support', value: 'Multilingual' },
        { label: 'Training Data Required', value: 'Minimal (Few-shot)' },
        { label: 'Deployment', value: 'Enterprise-ready' }
      ],
      impact: 'Created a versatile keyword spotting system that reduces the need for extensive training data while maintaining high accuracy across multiple languages.'
    },
    techStack: ['Python', 'Machine Learning', 'Few-shot Learning', 'NLP', 'System Monitoring'],
    githubUrl: '',
    learnings: 'Gained expertise in few-shot learning techniques, learned to optimize models for production deployment, and understood the challenges of building language-agnostic AI systems.',
    featured: false
  },
  {
    id: 'conversational-ai-chatbot',
    title: 'Conversational AI Chatbot',
    abstract: 'Intelligent chatbot system designed for enhanced user engagement and automated customer support.',
    category: 'AI/ML',
    problemStatement: 'Build a conversational AI system that can handle complex user queries while maintaining context and providing accurate responses.',
    methodology: 'Utilized natural language processing techniques, implemented context-aware dialogue management, integrated machine learning models for intent recognition, and deployed using modern AI frameworks.',
    results: {
      metrics: [
        { label: 'User Engagement', value: 'Enhanced' },
        { label: 'Context Awareness', value: 'Advanced' },
        { label: 'Deployment', value: 'Production-ready' }
      ],
      impact: 'Delivered an intelligent chatbot capable of handling complex conversations and improving customer support efficiency.'
    },
    techStack: ['CREW AI', 'NLP', 'Python', 'Dialogue Management'],
    githubUrl: '',
    learnings: 'Developed skills in conversational AI design, learned to manage dialogue context effectively, and gained experience with modern AI agent frameworks.',
    featured: false
  },
  {
    id: 'sustainable-agriculture',
    title: 'Sustainable Agriculture System (Hult Prize)',
    abstract: 'Innovative agricultural system that achieved up to 70% reduction in chemical use, securing Top 3 position at Hult Prize.',
    category: 'AI/ML',
    problemStatement: 'Design a sustainable agriculture solution that reduces chemical dependency while maintaining or improving crop yields.',
    methodology: 'Applied data science techniques to optimize resource usage, developed predictive models for crop management, implemented monitoring systems for environmental impact, and created stakeholder communication frameworks.',
    results: {
      metrics: [
        { label: 'Chemical Use Reduction', value: 'Up to 70%' },
        { label: 'Competition Ranking', value: 'Top 3 - Hult Prize' },
        { label: 'Sustainability Impact', value: 'Significant' }
      ],
      impact: 'Demonstrated the potential of data-driven approaches to create sustainable agricultural practices while achieving recognition at international competition level.'
    },
    techStack: ['Data Science', 'Predictive Analytics', 'Environmental Monitoring'],
    githubUrl: '',
    learnings: 'Learned to apply technical solutions to social impact challenges, developed cross-functional team collaboration skills, and gained experience in competition-level project presentation.',
    featured: true
  }
];

export const publications: Publication[] = [
  {
    id: 'agent-ai-architecture',
    title: 'Agent AI Architecture Analysis',
    abstract: 'Comprehensive analysis of modern AI agent architectures, design patterns, and best practices for production deployment.',
    publishedDate: '2024',
    url: '#',
    type: 'article'
  },
  {
    id: 'excel-vba-automation',
    title: 'Excel VBA for Analytical Task Automation',
    abstract: 'Exploration of Excel VBA capabilities for automating data analytics workflows and improving efficiency in business intelligence tasks.',
    publishedDate: '2024',
    url: '#',
    type: 'article'
  }
];

export const experiences: Experience[] = [
  {
    id: 'efftronics',
    title: 'Research and Development Trainee',
    organization: 'Efftronics Systems Pvt. Ltd.',
    location: 'India',
    startDate: '2024',
    endDate: null,
    description: 'Applied data analytics techniques for faults analysis on Remote Diagnostics & Predictive Maintenance Systems (RDPMS). Built Power BI dashboards to identify trends and anomalies, contributing to predictive maintenance models that reduced system downtime.',
    highlights: [
      'Performed faults analysis on RDPMS using data analytics techniques',
      'Built Power BI dashboards for trend and anomaly identification',
      'Contributed to predictive maintenance models reducing system downtime',
      'Collaborated with cross-functional teams on system improvements'
    ]
  },
  {
    id: 'dharvix',
    title: 'Business Intelligence Intern',
    organization: 'DharviX Tech Solutions',
    location: 'India',
    startDate: '2023',
    endDate: '2024',
    description: 'Worked on business intelligence projects utilizing Power BI, Grafana, and MySQL for data visualization and analysis.',
    highlights: [
      'Developed interactive dashboards using Power BI and Grafana',
      'Performed data analysis using MySQL and statistical techniques',
      'Created visualizations for business decision-making',
      'Collaborated with stakeholders to understand data requirements'
    ]
  },
  {
    id: 'gdsc',
    title: 'GDSC Core Member',
    organization: 'Google Developer Student Clubs',
    location: 'Andhra University',
    startDate: '2023',
    endDate: '2024',
    description: 'Contributed to technical community building, organized workshops, and mentored students in software development and data science.',
    highlights: [
      'Organized technical workshops and hackathons',
      'Mentored students in programming and data science',
      'Collaborated on community projects',
      'Promoted developer ecosystem engagement'
    ]
  },
  {
    id: 'vedic-club',
    title: 'Founder',
    organization: 'Vedic Science and Culture Club',
    location: 'Andhra University',
    startDate: '2023',
    endDate: '2024',
    description: 'Founded and led a student organization focused on integrating traditional knowledge with modern science.',
    highlights: [
      'Established and grew student organization from inception',
      'Organized cultural and educational events',
      'Developed leadership and organizational skills',
      'Built cross-functional team collaboration experience'
    ]
  }
];

export const education: Education[] = [
  {
    id: 'andhra-university',
    degree: 'Bachelor of Technology in Computer Science and Systems Engineering',
    institution: 'Andhra University',
    location: 'India',
    startDate: '2021',
    endDate: '2025',
    highlights: [
      'Specialized in Applied AI and Data Systems',
      'Smart India Hackathon participant',
      'Hult Prize Top 3 finalist',
      'GDSC Core Member',
      'Founded Vedic Science and Culture Club'
    ]
  }
];

export const skills = {
  'Applied AI & Machine Learning': [
    'Machine Learning',
    'Deep Learning',
    'Natural Language Processing',
    'Few-shot Learning',
    'Predictive Analytics',
    'Agent AI (CREW AI)'
  ],
  'Business Intelligence & Analytics': [
    'Power BI',
    'Grafana',
    'Data Visualization',
    'Statistical Analysis',
    'Dashboard Design',
    'KPI Development'
  ],
  'Data Engineering & Governance': [
    'ETL Pipelines',
    'Data Lineage Tracking',
    'Data Validation',
    'RBAC Implementation',
    'Compliance Documentation',
    'Database Management (MySQL)'
  ],
  'Programming & Tools': [
    'Python',
    'SQL',
    'Excel VBA',
    'CURSOR',
    'N8N',
    'BOLT'
  ],
  'Regulatory Compliance': [
    'HIPAA Compliance',
    'GDPR Compliance',
    'Financial Data Integrity',
    'Audit Trail Management',
    'Cross-functional Collaboration'
  ]
};

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/charan-venkatesh',
  github: 'https://github.com/Charan-Venkatesh',
  email: 'charanvenkatesh2004@gmail.com'
};
