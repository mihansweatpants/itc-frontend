import React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import LeadInfo from '../LeadInfo';
import Restaurants from '../Restaurants';
import Footer from '../Footer';

const Main = props => (
    <App>
        <Header logo="white" main="true" />
        <LeadInfo />
        <Restaurants main />
        <Footer />
    </App>
);

const App = styled.div``;

export default Main;
