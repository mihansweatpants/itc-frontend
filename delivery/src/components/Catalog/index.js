import React from 'react';

import Header from '../Header/Top';
import Restaurants from '../Restaurants';
import Footer from '../Footer';

const Catalog = props => (
    <div>
        <Header logo="black" />
        <Restaurants />
        <Footer />
    </div>
);

export default Catalog;
