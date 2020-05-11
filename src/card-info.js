import supervisor from './images/icon-supervisor.svg';
import teamBuilder from './images/icon-team-builder.svg';
import karma from './images/icon-karma.svg';
import calculator from './images/icon-calculator.svg';

const cards = [
  {
    title: 'Supervisor',
    text: 'Monitors activity to identify project roadblocks',
    imageUrl: supervisor,
    border: 'hsl(180, 62%, 55%)',
  },
  {
    title: 'Team Builder',
    text:
      'Scans our talent network to create the optimal team for your project',
    imageUrl: teamBuilder,
    border: 'hsl(0, 78%, 62%)',
  },
  {
    title: 'Karma',
    text: 'Regularly evaluate our talent to ensure quality',
    imageUrl: karma,
    border: 'hsl(34, 97%, 64%)',
  },
  {
    title: 'Calculator',
    text: 'Uses data from past projects to provide better delivery estimates',
    imageUrl: calculator,
    border: 'hsl(212, 86%, 64%)',
  },
];

export default cards;
