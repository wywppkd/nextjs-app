import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const About = () => {
  const router = useRouter();
  const { datetime } = router.query;

  return (
    <div>
      <div className="text-2xl text-center mt-20">
        <div>
          The Big Day: {moment(datetime).format()} ({moment(datetime).fromNow()})
        </div>
        <div>距离今天 {moment().diff(moment(datetime), 'year', true).toFixed(1)} 年</div>
        <div>距离今天 {moment().diff(moment(datetime), 'day', true).toFixed(1)} 天</div>
      </div>
      <Link href="/">
        <a className="fixed bottom-2 left-1/2 translate-x-[-50%]">回到首页</a>
      </Link>
    </div>
  );
};

export default About;
