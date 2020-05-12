import supervisor from './images/icon-supervisor.svg';
import teamBuilder from './images/icon-team-builder.svg';
import karma from './images/icon-karma.svg';
import calculator from './images/icon-calculator.svg';

const cards = [
  {
    id: 1,
    title: 'Supervisor',
    text: 'Monitors activity to identify project roadblocks',
    imageUrl: supervisor,
    alt: 'supervisor icon',
    border: 'hsl(180, 62%, 55%)',
  },
  {
    id: 2,
    title: 'Team Builder',
    text:
      'Scans our talent network to create the optimal team for your project',
    imageUrl: teamBuilder,
    alt: 'team builder icon',
    border: 'hsl(0, 78%, 62%)',
  },
  {
    id: 3,
    title: 'Karma',
    text: 'Regularly evaluate our talent to ensure quality',
    imageUrl: karma,
    alt: 'karma icon',
    border: 'hsl(34, 97%, 64%)',
  },
  {
    id: 4,
    title: 'Calculator',
    text: 'Uses data from past projects to provide better delivery estimates',
    imageUrl: calculator,
    alt: 'calculator icon',
    border: 'hsl(212, 86%, 64%)',
  },
];

export default cards;
