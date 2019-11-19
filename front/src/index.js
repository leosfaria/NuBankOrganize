import React from 'react';
import ReactDOM from 'react-dom';

import 'react-bulma-components/dist/react-bulma-components.min.css';

import { Router } from './router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
serviceWorker.unregister();
