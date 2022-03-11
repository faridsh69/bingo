import { FC } from 'react';
import { animated, useSpring } from 'react-spring';

export const Reward: FC = () => {
  const bingoStyles = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: '#ffaaee' },
      { opacity: 0.5, color: 'rgb(12,26,19)' }
    ],
    from: { opacity: 0.3, color: 'red' }
  });

  return (
    <animated.div style={bingoStyles} className="reward">
      Bingo
    </animated.div>
  );
};
