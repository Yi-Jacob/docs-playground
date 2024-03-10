"use strict";(self.webpackChunkdf_docs=self.webpackChunkdf_docs||[]).push([[1933],{5680:(e,n,i)=>{i.d(n,{xA:()=>p,yg:()=>u});var a=i(6540);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function l(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?l(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,a,t=function(e,n){if(null==e)return{};var i,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)i=l[a],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)i=l[a],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var g=a.createContext({}),s=function(e){var n=a.useContext(g),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},p=function(e){var n=s(e.components);return a.createElement(g.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var i=e.components,t=e.mdxType,l=e.originalType,g=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(i),y=t,u=m["".concat(g,".").concat(y)]||m[y]||d[y]||l;return i?a.createElement(u,r(r({ref:n},p),{},{components:i})):a.createElement(u,r({ref:n},p))}));function u(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=i.length,r=new Array(l);r[0]=y;var o={};for(var g in n)hasOwnProperty.call(n,g)&&(o[g]=n[g]);o.originalType=e,o[m]="string"==typeof e?e:t,r[1]=o;for(var s=2;s<l;s++)r[s]=i[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}y.displayName="MDXCreateElement"},2800:(e,n,i)=>{i.r(n),i.d(n,{contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var a=i(8168),t=(i(6540),i(5680));const l={sidebar_position:1},r="Basic Configuration",o={unversionedId:"DreamFactory Configuration/configuration",id:"DreamFactory Configuration/configuration",isDocsHomePage:!1,title:"Basic Configuration",description:"This page outlines the basic configuration settings for DreamFactory. For the most part, this will mean adding/changing parameers in the .env file located in the dreamfactory directory. Common tasks/procedures are outlined at the top of this page, and every parameter indiidually documented at the end of this page.",source:"@site/docs/DreamFactory Configuration/configuration.md",sourceDirName:"DreamFactory Configuration",slug:"/DreamFactory Configuration/configuration",permalink:"/DreamFactory Configuration/configuration",editUrl:"https://github.com/dreamfactorysoftware/df-docs/docs/DreamFactory Configuration/configuration.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Manual Installation",permalink:"/Installing DreamFactory/manual-install"},next:{title:"Nginx",permalink:"/DreamFactory Configuration/Web Server Configuration/nginx"}},g=[{value:"Common Configuration Tasks/FAQ",id:"common-configuration-tasksfaq",children:[{value:"Changing Configuration",id:"changing-configuration",children:[]},{value:"Enable Debugging",id:"enable-debugging",children:[]},{value:"Changing the System Database",id:"changing-the-system-database",children:[]},{value:"Caching settings",id:"caching-settings",children:[]}]},{value:"Configuration Parameters",id:"configuration-parameters",children:[{value:"Application Settings",id:"application-settings",children:[]},{value:"Database Settings",id:"database-settings",children:[]},{value:"Cache Settings",id:"cache-settings",children:[]},{value:"Limit Cache Settings",id:"limit-cache-settings",children:[]},{value:"Queuing Settings",id:"queuing-settings",children:[]},{value:"Event Broadcasting Settings",id:"event-broadcasting-settings",children:[]},{value:"DreamFactory Settings",id:"dreamfactory-settings",children:[]},{value:"Storage Settings",id:"storage-settings",children:[]},{value:"Scripting Settings",id:"scripting-settings",children:[]},{value:"API Settings",id:"api-settings",children:[]},{value:"Managed Settings",id:"managed-settings",children:[]},{value:"LogsDB Settings",id:"logsdb-settings",children:[]},{value:"License Key",id:"license-key",children:[]}]}],s={toc:g},p="wrapper";function m(e){let{components:n,...i}=e;return(0,t.yg)(p,(0,a.A)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"basic-configuration"},"Basic Configuration"),(0,t.yg)("p",null,"This page outlines the basic configuration settings for DreamFactory. For the most part, this will mean adding/changing parameers in the .env file located in the ",(0,t.yg)("inlineCode",{parentName:"p"},"dreamfactory")," directory. Common tasks/procedures are outlined at the top of this page, and every parameter indiidually documented at the end of this page. "),(0,t.yg)("div",{className:"admonition admonition-info alert alert--info"},(0,t.yg)("div",{parentName:"div",className:"admonition-heading"},(0,t.yg)("h5",{parentName:"div"},(0,t.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,t.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,t.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,t.yg)("div",{parentName:"div",className:"admonition-content"},(0,t.yg)("p",{parentName:"div"},"For web server configurations, check the child pages of this section for your specific web server"))),(0,t.yg)("h2",{id:"common-configuration-tasksfaq"},"Common Configuration Tasks/FAQ"),(0,t.yg)("h3",{id:"changing-configuration"},"Changing Configuration"),(0,t.yg)("p",null,"Any time configuration is changed in the .env file, at a minimum, the confguration cache must be cleared. This can be done by running ",(0,t.yg)("inlineCode",{parentName:"p"},"php artisan config:clear")," in the ",(0,t.yg)("inlineCode",{parentName:"p"},"dreamfactory")," directory. "),(0,t.yg)("h3",{id:"enable-debugging"},"Enable Debugging"),(0,t.yg)("p",null,"Two parameters are used here:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"APP_LOG_LEVEL")," : Set to ",(0,t.yg)("inlineCode",{parentName:"li"},"debug")," for debug mode. Other levels are described in the parameter listing below. "),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"APP_DEBUG")," : Set to ",(0,t.yg)("inlineCode",{parentName:"li"},"true")," to turn on the application debug messages. This will have DreamFactory return a payload with a trace for error(s). ")),(0,t.yg)("h3",{id:"changing-the-system-database"},"Changing the System Database"),(0,t.yg)("h3",{id:"caching-settings"},"Caching settings"),(0,t.yg)("h2",{id:"configuration-parameters"},"Configuration Parameters"),(0,t.yg)("p",null,"Below, the .env in its entirety is outlined and every parameter described. These parameters are listed in the order/section they would normally exist on a DreamFactory instance. "),(0,t.yg)("h3",{id:"application-settings"},"Application Settings"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"ASSET_URL"),": Configures the asset URL host."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"VIEW_COMPILED_PATH"),": Location for compiled Blade templates."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"BCRYPT_ROUNDS"),": Options for Bcrypt password hashing."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"APP_NAME"),": Name of the application."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"APP_CIPHER"),": Encryption cipher options."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"APP_DEBUG"),": Debugging trace toggle in exceptions."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"APP_ENV"),": Environment type (local, production)."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"APP_KEY"),": Application encryption key."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"APP_LOCALE"),": Default application locale."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"LOG_CHANNEL"),": Configuration for log channels."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"APP_LOG_LEVEL"),": Log level setting."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"APP_LOG_MAX_FILES"),": Max log files for 'daily' logging."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"APP_TIMEZONE"),": Timezone setting for PHP functions."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"APP_URL"),": External URL for the installation."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DF_LANDING_PAGE"),": Default landing page URL.")),(0,t.yg)("h3",{id:"database-settings"},"Database Settings"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DB_CONNECTION"),": Type of database connection."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DB_HOST"),": Database host address."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DB_PORT"),": Database port number."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DB_DATABASE"),": Database name."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DB_USERNAME"),": Database username."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DB_PASSWORD"),": Database password."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DB_CHARSET"),": Database character set."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DB_COLLATION"),": Database collation setting."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DB_QUERY_LOG_ENABLED"),": Toggle for database query logging."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DB_MAX_RECORDS_RETURNED"),": Max records returned in queries."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DF_SQLITE_STORAGE"),": Location for SQLite3 database files."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DF_FREETDS_SQLSRV"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"DF_FREETDS_SQLANYWHERE"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"DF_FREETDS_SYBASE"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"DF_FREETDS_DUMP"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"DF_FREETDS_DUMPCONFIG"),": FreeTDS configuration settings.")),(0,t.yg)("h3",{id:"cache-settings"},"Cache Settings"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"CACHE_DRIVER"),": Cache driver type."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"CACHE_DEFAULT_TTL"),": Default cache TTL in seconds."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"CACHE_PREFIX"),": Prefix for cache keys."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"CACHE_PATH"),": Cache path for 'file' driver."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"CACHE_TABLE"),": Cache table for 'database' driver."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"CACHE_HOST"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"CACHE_PORT"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"CACHE_PASSWORD"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"CACHE_WEIGHT"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"CACHE_PERSISTENT_ID"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"CACHE_USERNAME"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"CACHE_DATABASE"),": Cache settings for 'memcached' or 'redis'.")),(0,t.yg)("h3",{id:"limit-cache-settings"},"Limit Cache Settings"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"LIMIT_CACHE_DRIVER"),": Limit cache driver type."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"LIMIT_CACHE_PREFIX"),": Prefix for limit cache keys."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"LIMIT_CACHE_PATH"),": Path for 'file' limit cache."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"LIMIT_CACHE_TABLE"),": Table for 'database' limit cache."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"LIMIT_CACHE_HOST"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"LIMIT_CACHE_PORT"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"LIMIT_CACHE_PASSWORD"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"LIMIT_CACHE_WEIGHT"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"LIMIT_CACHE_PERSISTENT_ID"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"LIMIT_CACHE_USERNAME"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"LIMIT_CACHE_DATABASE"),": Limit cache settings for 'memcached' or 'redis'.")),(0,t.yg)("h3",{id:"queuing-settings"},"Queuing Settings"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"QUEUE_CONNECTION"),": Queue connection type."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"QUEUE_NAME"),": Name of the queue."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"QUEUE_RETRY_AFTER"),": Retry time for failed jobs."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"QUEUE_TABLE"),": Queue table for 'database' driver."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"AWS_ACCESS_KEY_ID"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"AWS_SECRET_ACCESS_KEY"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"AWS_DEFAULT_REGION"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"SQS_PREFIX"),": AWS SQS settings."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"QUEUE_HOST"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"QUEUE_PORT"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"QUEUE_DATABASE"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"QUEUE_PASSWORD"),": Queue settings for 'beanstalkd' or 'redis'.")),(0,t.yg)("h3",{id:"event-broadcasting-settings"},"Event Broadcasting Settings"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"BROADCAST_DRIVER"),": Broadcasting driver type."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"PUSHER_APP_ID"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"PUSHER_APP_KEY"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"PUSHER_APP_SECRET"),": Pusher settings."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"BROADCAST_HOST"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"BROADCAST_PORT"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"BROADCAST_DATABASE"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"BROADCAST_PASSWORD"),": Broadcast settings for 'redis'.")),(0,t.yg)("h3",{id:"dreamfactory-settings"},"DreamFactory Settings"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DF_LOGIN_ATTRIBUTE"),": User authentication attribute."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DF_ENABLE_ALTERNATE_AUTH"),": Toggle for alternate authentication."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DF_ENABLE_WINDOWS_AUTH"),": Windows authentication for AD SSO."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DF_CONFIRM_CODE_LENGTH"),": Length of user confirmation code."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DF_CONFIRM_CODE_TTL"),": TTL for confirmation code."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"JWT_SECRET"),": JWT encryption secret."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DF_JWT_TTL"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"DF_JWT_REFRESH_TTL"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"DF_ALLOW_FOREVER_SESSIONS"),": JWT session settings."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DF_JWT_USER_CLAIM"),": Custom JWT claim fields."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DF_CONFIRM_RESET_URL"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"DF_CONFIRM_INVITE_URL"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"DF_CONFIRM_REGISTER_URL"),": URLs for user actions.")),(0,t.yg)("h3",{id:"storage-settings"},"Storage Settings"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DF_FILE_CHUNK_SIZE"),": Chunk size for downloadable files.")),(0,t.yg)("h3",{id:"scripting-settings"},"Scripting Settings"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DF_SCRIPTING_DISABLE"),": Disables specific scripting languages."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DF_NODEJS_PATH"),": Path to Node.js executable."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DF_PYTHON_PATH"),": Path to Python executable."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DF_PYTHON3_PATH"),": Path to Python3 executable."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DF_SCRIPTING_DEFAULT_PROTOCOL"),": Default protocol for scripting calls."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DF_SCRIPT_INLINE_CHAR_LIMIT"),": Inline script character limit.")),(0,t.yg)("h3",{id:"api-settings"},"API Settings"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DF_API_ROUTE_PREFIX"),": Prefix for API routes."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DF_STATUS_ROUTE_PREFIX"),": Prefix for status routes."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DF_STORAGE_ROUTE_PREFIX"),": Prefix for storage routes."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DF_XML_ROOT"),": Root tag for XML responses."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DF_ALWAYS_WRAP_RESOURCES"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"DF_RESOURCE_WRAPPER"),": Resource wrapping settings."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DF_CONTENT_TYPE"),": Default response content-type."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DF_LOOKUP_MODIFIERS"),": Allowed lookup modifiers."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DF_PACKAGE_PATH"),": Path for package import at launch."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DF_INSTALL"),": Installation source.")),(0,t.yg)("h3",{id:"managed-settings"},"Managed Settings"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DF_MANAGED"),": Managed environment toggle."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DF_MANAGED_LOG_PATH"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"DF_MANAGED_CACHE_PATH"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"DF_MANAGED_LOG_ROTATE_COUNT"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"DF_MANAGED_LOG_FILE_NAME"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"DF_LIMITS_CACHE_STORE"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"DF_LIMITS_CACHE_PATH"),": Managed environment settings."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"SENDMAIL_DEFAULT_COMMAND"),": Default sendmail command."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DF_REGISTER_CONTACT"),": Registration contact information.")),(0,t.yg)("h3",{id:"logsdb-settings"},"LogsDB Settings"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"LOGSDB_ENABLED"),": LogsDB enabled toggle."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"LOGSDB_HOST"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"LOGSDB_PORT"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"LOGSDB_DATABASE"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"LOGSDB_USERNAME"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"LOGSDB_PASSWORD"),": LogsDB settings.")),(0,t.yg)("h3",{id:"license-key"},"License Key"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DF_LICENSE_KEY"),": DreamFactory license key.")))}m.isMDXComponent=!0}}]);