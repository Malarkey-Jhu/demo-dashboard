import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => {
  return {
    success: {
      color: token.colorSuccess,
    },
  };
});

export default useStyles;
