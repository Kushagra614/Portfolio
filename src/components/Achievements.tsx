import { Award, Github, BookOpen, Trophy } from 'lucide-react';

interface Achievement {
  type: 'publication' | 'award' | 'contribution' | 'leadership';
  title: string;
  subtitle: string;
  description: string;
  date: string;
  icon: React.ReactNode;
  link?: string;
}

const achievements: Achievement[] = [
  {
    type: 'publication',
    title: 'A Multi-Task Deep Learning Analysis for Lung Cancer Detection',
    subtitle: 'IEEE ICICNIS',
    description: 'Co-authored comparative study of CNN architectures (ResNet, DenseNet, EfficientNet) for lung cancer classification and segmentation',
    date: 'Jan 2026',
    icon: <BookOpen className="w-5 h-5" />,
    link: '#',
  },
  {
    type: 'contribution',
    title: 'Hacktoberfest Contributor',
    subtitle: 'Multiple Open Source Projects',
    description: 'Contributed to 4+ open source repositories with merged pull requests focusing on bug fixes and feature enhancements',
    date: 'Oct 2024',
    icon: <Github className="w-5 h-5" />,
  },
  {
    type: 'contribution',
    title: 'GirlScript Summer of Code',
    subtitle: 'GirlScript Foundation',
    description: 'Completed 2 major projects with 15+ commits and 8 merged pull requests demonstrating collaborative development',
    date: 'May – Aug 2024',
    icon: <Github className="w-5 h-5" />,
  },
  {
    type: 'award',
    title: 'State-level Sports Excellence',
    subtitle: 'Tennis & Skating',
    description: 'State-level Tennis Player | State-level Skating Gold Medalist | SOF Mathematics Olympiad Gold Medalist',
    date: '2024',
    icon: <Trophy className="w-5 h-5" />,
  },
  {
    type: 'leadership',
    title: 'FinTech Club Organizer',
    subtitle: 'Technical Leadership',
    description: 'Organized FinTech club with focus on technical event coordination and financial technology discussions',
    date: 'Ongoing',
    icon: <Award className="w-5 h-5" />,
  },
  {
    type: 'leadership',
    title: 'Creative & Technical Skills',
    subtitle: 'Photography & Engineering',
    description: 'Wildlife, product, and street photography enthusiast combining creative vision with technical excellence',
    date: 'Ongoing',
    icon: <Award className="w-5 h-5" />,
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6 hover:border-primary/60 transition-all animate-float-slow">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-xs text-primary uppercase tracking-wider font-semibold">Achievements</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 animate-scale-pop">
            Publications & <span className="text-primary glow-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg animate-fade-in" style={{ animationDelay: '200ms' }}>
            Recognition for technical excellence, open source contributions, and leadership
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="group metric-card relative overflow-hidden animate-scale-pop"
              style={{ 
                animationDelay: `${index * 80}ms`,
                animationFillMode: 'both'
              }}
            >
              {/* Background glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-all duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-primary font-semibold mt-1">{achievement.subtitle}</p>
                  </div>
                </div>

                {/* Date Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/25 bg-primary/5 text-xs text-primary font-medium mb-4 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                  {achievement.date}
                </div>

                {/* Description */}
                <p className="text-muted-foreground group-hover:text-secondary-foreground transition-colors duration-300 text-sm leading-relaxed">
                  {achievement.description}
                </p>

                {/* Link if available */}
                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                  >
                    Read More →
                  </a>
                )}
              </div>

              {/* Decorative bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
