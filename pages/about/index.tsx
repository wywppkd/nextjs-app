import { useEffect, useState } from 'react';
import styles from './index.module.scss';

const About = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('🚀 ~ file: index.tsx ~ line 9 ~ useEffect ~ count', count);
  }, [count]);

  return (
    <div className={styles.about}>
      <div
        onClick={() => {
          setCount(Date.now());
        }}
      >
        count:{count}
      </div>
    </div>
  );
};

export default About;
