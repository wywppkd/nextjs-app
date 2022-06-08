import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { UserInfoType } from '../services/data';
import { getUserInfo } from '../services/home';

type Props = {
  userInfo: UserInfoType;
};

const Home = ({ userInfo }: Props) => {
  console.log('🚀 ~ file: index.tsx ~ line 6 ~ userInfo', userInfo);

  return (
    <div>
      <Head>
        <title>Hello Next</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <h1>
        Hello, {userInfo.name}, I&lsquo;am {userInfo.age} years old
      </h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await getUserInfo();
  return {
    props: {
      userInfo: res.errcode === 0 ? res.data : null,
    },
  };
};

export default Home;