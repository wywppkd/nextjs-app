import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'normalize.css';
import 'antd/dist/antd.css';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn.js';

moment.locale('zh-cn');
moment.defaultFormat = 'YYYY-MM-DD HH:mm:ss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider locale={zhCN}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}

export default MyApp;
