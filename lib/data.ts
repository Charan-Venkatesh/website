import { Project, Publication, Experience } from '@/types';

export const profileData = {
  name: 'Charan Venkatesh',
  title: 'Applied AI Architect | Data Governance & BI Specialist',
  headline: 'Building High-Integrity AI Systems for Regulatory-Compliant Environments',
  bio: 'Specialized in the intersection of Applied Artificial Intelligence, Business Intelligence, and Data Governance. Expert in designing secure, scalable AI systems that meet enterprise-grade compliance requirements including HIPAA and GDPR.',
  email: 'charanvenkatesh2004@gmail.com',
  linkedin: 'https://www.linkedin.com/in/charan-venkatesh',
  github: 'https://github.com/Charan-Venkatesh',
  education: {
    degree: 'Bachelor of Technology in Computer Science and Systems Engineering',
    institution: 'Andhra University',
    period: '2021-2025'
  },
  skills: {
    'AI & Machine Learning': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision'],
    'Business Intelligence': ['Power BI', 'Grafana', 'Tableau', 'Data Visualization'],
    'Data Engineering': ['Python', 'SQL', 'MySQL', 'ETL Pipelines', 'Data Lineage'],
    'Governance & Compliance': ['HIPAA', 'GDPR', 'RBAC', 'Data Quality', 'Audit Trails'],
    'Tools & Platforms': ['CREW AI', 'N8N', 'CURSOR', 'Excel VBA', 'Git']
  }
};

export const projects: Project[] = [
  {
    id: 'cancer-diagnosis',
    title: 'Personalized Cancer Diagnosis Research System',
    description: 'Machine learning system for personalized cancer diagnosis with focus on healthcare data compliance and security.',
    category: 'ai-ml',
    technologies: ['Python', 'TensorFlow', 'ETL', 'RBAC', 'Data Validation'],
    impact: 'Achieved 92% diagnostic accuracy while maintaining HIPAA and GDPR compliance through automated data validation and secure access controls.',
    compliance: ['HIPAA', 'GDPR', 'Role-Based Access Control', 'Data Lineage Tracking'],
    featured: true
  },
  {
    id: 'fraud-detection',
    title: 'Enterprise Fraud Detection System',
    description: 'AI-powered fraud detection system with enhanced data integrity and regulatory compliance for financial institutions.',
    category: 'ai-ml',
    technologies: ['Python', 'Machine Learning', 'Data Validation', 'Lineage Tracking'],
    impact: 'Enhanced financial data integrity by 45% through automated validation and improved data lineage tracking, directly addressing regulatory requirements.',
    compliance: ['Financial Regulations', 'Data Lineage', 'Automated Validation'],
    featured: true
  },
  {
    id: 'fslakws',
    title: 'Few-Shot Language-Agnostic Keyword Spotting System',
    description: 'Advanced multilingual keyword spotting system with enterprise scalability and monitoring capabilities.',
    category: 'ai-ml',
    technologies: ['Deep Learning', 'NLP', 'System Monitoring', 'Scalability Architecture'],
    impact: 'Developed scalable, multilingual AI system with built-in monitoring and system integrity checks for enterprise deployment.',
    featured: true
  },
  {
    id: 'rdpms-analysis',
    title: 'RDPMS Faults Analysis & Predictive Maintenance',
    description: 'Business Intelligence system for Remote Diagnostics & Predictive Maintenance with Power BI dashboards.',
    category: 'business-intelligence',
    technologies: ['Power BI', 'Python', 'Data Analytics', 'MySQL', 'Statistical Modeling'],
    impact: 'Reduced system downtime through predictive maintenance models and real-time anomaly detection dashboards.',
    featured: true
  },
  {
    id: 'conversational-ai',
    title: 'Conversational AI Chatbot',
    description: 'Intelligent chatbot system with natural language understanding and cross-functional integration.',
    category: 'ai-ml',
    technologies: ['NLP', 'Python', 'API Integration', 'CREW AI'],
    impact: 'Improved customer service efficiency through intelligent automation and seamless integration with existing systems.',
    featured: false
  }
];

export const publications: Publication[] = [
  {
    id: 'agent-ai-architecture',
    title: 'Exploring Agent AI Architecture: Building Intelligent Systems',
    description: 'In-depth analysis of Agent AI architectural patterns and their application in enterprise environments.',
    url: '#',
    publishedAt: '2024'
  },
  {
    id: 'excel-vba-automation',
    title: 'Excel VBA: Automating Analytical Tasks for Data Efficiency',
    description: 'Practical guide to leveraging Excel VBA for data analytics automation and workflow optimization.',
    url: '#',
    publishedAt: '2024'
  }
];

export const experiences: Experience[] = [
  {
    id: 'efftronics',
    title: 'Research and Development Trainee',
    company: 'Efftronics Systems Pvt. Ltd.',
    period: '2023-2024',
    description: 'Applied data analytics and machine learning to predictive maintenance systems',
    achievements: [
      'Performed faults analysis on Remote Diagnostics & Predictive Maintenance Systems (RDPMS)',
      'Built Power BI dashboards to identify trends and anomalies',
      'Contributed to predictive maintenance models reducing system downtime',
      'Implemented data quality checks and validation processes'
    ]
  },
  {
    id: 'dharvix',
    title: 'Business Intelligence Intern',
    company: 'DharviX Tech Solutions',
    period: '2023',
    description: 'Developed BI solutions and data visualizations for business decision-making',
    achievements: [
      'Created interactive dashboards using Power BI and Grafana',
      'Performed data analysis on large datasets using SQL and Python',
      'Collaborated with cross-functional teams to gather requirements',
      'Implemented ETL workflows for data integration'
    ]
  }
];

export const achievements = [
  {
    id: 'smart-india-hackathon',
    title: 'Smart India Hackathon Winner',
    description: 'Victory in national-level hackathon competition',
    year: '2024'
  },
  {
    id: 'hult-prize',
    title: 'Hult Prize - Top 3',
    description: 'Developed system achieving up to 70% reduction in chemical use',
    year: '2024'
  },
  {
    id: 'gdsc-core',
    title: 'GDSC Core Member',
    description: 'Active contributor to Google Developer Student Clubs',
    year: '2023-2024'
  },
  {
    id: 'vedic-club',
    title: 'Vedic Science and Culture Club Founder',
    description: 'Founded and led university organization',
    year: '2022'
  }
];
