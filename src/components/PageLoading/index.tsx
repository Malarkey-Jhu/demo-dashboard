
import { Spin } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundColor: token.colorBgBase,
      backgroundImage: 'url(https://cdn.prod.website-files.com/66d9c7ee21a87e61fe5d0e22/66e303a3b89c66d91852392c_pattern%20with%20light.webp)',
      backgroundPosition: '100% 100%',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
    },
  };
});

export default function PageLoading() {
  const { styles } = useStyles();
  return <div className={styles.container}><Spin /></div>;
}

