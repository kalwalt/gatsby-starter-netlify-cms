import React from 'react';
//import Layout from './index';
import Layout from 'Layout'
import { addLocaleData } from 'react-intl';

import messages from '../data/messages/it';
import it from 'react-intl/locale-data/it';
import 'intl/locale-data/jsonp/it';

addLocaleData(it);

export default (props) => (
  <Layout
    {...props}
    i18nMessages={messages}
  />);
