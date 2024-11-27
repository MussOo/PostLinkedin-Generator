export const techTopics = [
  "Modern JavaScript Features",
  "React Best Practices",
  "TypeScript Tips and Tricks",
  "Web Performance Optimization",
  "Clean Code Principles",
  "API Design Patterns",
  "DevOps Best Practices",
  "Microservices Architecture",
  "Cloud Computing Trends",
  "Security Best Practices",
  "Testing Strategies",
  "CI/CD Pipelines",
  "Docker and Containerization",
  "Database Optimization",
  "Frontend Architecture",
  "State Management",
  "Serverless Computing",
  "Machine Learning Basics",
  "Code Review Best Practices",
  "System Design Principles"
];

export function getRandomTopic(): string {
  const randomIndex = Math.floor(Math.random() * techTopics.length);
  return techTopics[randomIndex];
}