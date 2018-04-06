import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import LeadInfo from './LeadInfo';
import Restaurants from './Restaurants';
import Footer from './Footer';
import { injectGlobal } from 'styled-components';

class Main extends Component {
    render() {
        return (
            <App>
                <Header />
                <LeadInfo />
                <Restaurants />
                <Footer />
            </App>
        );
    }
}

const App = styled.div``;

injectGlobal`
    body {
      margin: 0;
      font-family: "Open Sans", sans-serif;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
    }
`;

export default Main;
