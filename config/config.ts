// https://umijs.org/config/
import { defineConfig } from '@umijs/max';
import { join } from 'path';
import defaultSettings from './defaultSettings';
import proxy from './proxy';

import routes from './routes';

const { REACT_APP_ENV = 'dev' } = process.env;

export default defineConfig({
  favicons: ['/alluxio-favicon.svg'],
  /**
   * @name Enable hash mode
   * @description Make build products contain hash suffixes. Usually used for incremental releases and avoiding browser cache loading.
   * @doc https://umijs.org/docs/api/config#hash
   */
  hash: true,

  /**
   * @name Compatibility settings
   * @description IE11 compatibility is not guaranteed, need to check all dependencies used
   * @doc https://umijs.org/docs/api/config#targets
   */
  // targets: {
  //   ie: 11,
  // },
  /**
   * @name Route configuration
   * @description Files not included in routes will not be compiled. Only supports path, component, routes, redirect, wrappers, title configuration
   * @doc https://umijs.org/docs/guides/routes
   */
  // umi routes: https://umijs.org/docs/routing
  routes,
  /**
   * @name Theme configuration
   * @description Although called theme, it's actually just less variable settings
   * @doc antd theme settings https://ant.design/docs/react/customize-theme-cn
   * @doc umi theme configuration https://umijs.org/docs/api/config#theme
   */
  theme: {
    // If you don't want configProvide to dynamically set the theme, set this to 'default'
    // Only when set to 'variable' can you use configProvide to dynamically set the primary color
    'root-entry-name': 'variable',
  },
  /**
   * @name moment internationalization configuration
   * @description If you don't have internationalization requirements, enabling this can reduce js bundle size
   * @doc https://umijs.org/docs/api/config#ignoremomentlocale
   */
  ignoreMomentLocale: true,
  /**
   * @name Proxy configuration
   * @description Allows your local server to proxy to your server, so you can access server data
   * @see Note that proxy can only be used during local development, not after build
   * @doc proxy introduction https://umijs.org/docs/guides/proxy
   * @doc proxy configuration https://umijs.org/docs/api/config#proxy
   */
  proxy: proxy[REACT_APP_ENV as keyof typeof proxy],
  /**
   * @name Fast refresh configuration
   * @description A good hot update component that preserves state during updates
   */
  fastRefresh: true,
  //============== Max Plugin Configuration ===============
  /**
   * @name Data flow plugin
   * @doc https://umijs.org/docs/max/data-flow
   */
  model: {},
  /**
   * A global initial data flow that can be used to share data between plugins
   * @description Can be used to store global data, such as user information or global states. Global initial state is created at the very beginning of the Umi project.
   * @doc https://umijs.org/docs/max/data-flow#global-initial-state
   */
  initialState: {},
  /**
   * @name layout plugin
   * @doc https://umijs.org/docs/max/layout-menu
   */
  title: 'Alluxio',
  layout: {
    locale: true,
    ...defaultSettings,
  },
  /**
   * @name moment2dayjs plugin
   * @description Replace moment with dayjs in the project
   * @doc https://umijs.org/docs/max/moment2dayjs
   */
  moment2dayjs: {
    preset: 'antd',
    plugins: ['duration'],
  },
  /**
   * @name Internationalization plugin
   * @doc https://umijs.org/docs/max/i18n
   */
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  /**
   * @name antd plugin
   * @description Includes babel-import-plugin
   * @doc https://umijs.org/docs/max/antd#antd
   */
  antd: {
    dark: true,
    theme: {
      "token": {
        "colorBgBase": "#030021",
        "colorLink": "#00e0ff",
        "colorPrimary": "#186fdb",
        "colorInfo": "#186fdb",
        "colorText": "#ffffffd9",
        "colorTextSecondary": "#ffffffb3",
        "colorTextTertiary": "#ffffff99",
        "colorTextQuaternary": "#ffffff66",
        "colorBgElevated": "rgb(16,91,182)",
        "colorBgContainer": "#030021",
        "colorBgMask": "#000000b8",
        "colorBorder": "#2569b3",
        "colorBorderSecondary": "#123a64"
      },
      "components": {
        "Select": {
          "optionSelectedBg": "rgb(4,78,169)"
        },
        
        "Dropdown": {
          "controlItemBgActive": "#033f8a",
          "colorPrimary": "#ffffffd9",
        },
        "Input": {
          "hoverBorderColor": "rgb(72,153,252)",
          "activeBorderColor": "rgb(72,153,252)"
        },
        "Drawer": {
          "colorBgElevated": "#0d3b73"
        },
        "Modal": {
          "colorBgElevated": "#0d3b73"
        },
        "Button": {
          "primaryShadow": "0 0px 0 rgba(5, 145, 255, 0.1)",
          "defaultShadow": "0 0px 0 rgba(0, 0, 0, 0.02)",
          "dangerShadow": "0 0px 0 rgba(255, 38, 5, 0.06)",
          "textTextHoverColor": "#00e0ff",
          "colorBgContainer": "rgb(255,255,255, 0)"
        }
      },
    },
  },
  /**
   * @name request configuration
   * @description  Provides a unified network request and error handling solution based on axios and ahooks useRequest
   * @doc https://umijs.org/docs/max/request
   */
  request: {},
  /**
   * @name plugin
   * @description Permission plugin based on initialState, must enable initialState first
   * @doc https://umijs.org/docs/max/access
   */
  access: {},
  /**
   * @name Additional scripts in <head>
   * @description  Configure additional scripts in <head>
   */
  headScripts: [
    // Solve the white screen issue on first load
    { src: '/scripts/loading.js', async: true },
  ],
  //================ Pro Plugin Configuration =================
  presets: ['umi-presets-pro'],
  /**
   * @name openAPI plugin configuration
   * @description Generates services and mocks based on openapi specification, reducing boilerplate code
   * @doc https://pro.ant.design/zh-cn/docs/openapi/
   */
  openAPI: [
    {
      requestLibPath: "import { request } from '@umijs/max'",
      // Or use the online version
      // schemaPath: "https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json"
      schemaPath: join(__dirname, 'oneapi.json'),
      mock: false,
    },
    {
      requestLibPath: "import { request } from '@umijs/max'",
      schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/CA1dOm%2631B/openapi.json',
      projectName: 'swagger',
    },
  ],
  mock: {
    include: ['mock/**/*', 'src/pages/**/_mock.ts'],
  },
  mfsu: {
    strategy: 'normal',
  },
  esbuildMinifyIIFE: true,
  requestRecord: {},
}) as any;
