import React from 'react';

// Components
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import { connect } from 'react-redux';

// styles
import '../assets/styles/App.scss'
import Search from '../components/Search';
import Header from '../components/Header';
import Footer from '../components/Footer';

const API = 'http://localhost:3000/initialState'

const Home = ({ myList, trends, originals }) => {
    return <div className="App">
        <Header />
        <Search isHome />
        
        {myList?.length > 0 && (
            <Categories title="Mi lista">
                <Carousel>
                    {myList?.map( video => 
                        <CarouselItem key={video.id} {...video} isList />
                    )}
                </Carousel>
            </Categories>
        )}

        <Categories title="Trending">
            <Carousel>
                {trends?.map( video => 
                    <CarouselItem key={video.id} {...video} />
                )}
            </Carousel>
        </Categories>

        <Categories title="Originales de plamsi">
            <Carousel>
                {originals?.map( video => 
                    <CarouselItem key={video.id} {...video} />
                )}
            </Carousel>
        </Categories>
        <Footer />
    </div>
}

const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals
    }
}

export default connect(mapStateToProps, null)(Home);