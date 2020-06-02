import React from 'react';

// Components
import Header from '../components/Header';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

// styles
import '../assets/styles/App.scss'
import Search from '../components/Search';

// Hooks
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initialState'

const App = () => {
    const videos = useInitialState(API)

    return <div className="App">
        <Header />
        <Search />
        
        {videos.myList?.length > 0 && 
            <Categories title="Mi lista">
                <Carousel>
                    {videos.myList?.map( video => 
                        <CarouselItem key={video.id} {...video} />
                    )}
                </Carousel>
            </Categories>
        }

        <Categories title="Trending">
            <Carousel>
                {videos.trends?.map( video => 
                    <CarouselItem key={video.id} {...video} />
                )}
            </Carousel>
        </Categories>

        <Categories title="Originales de plamsi">
            <Carousel>
                {videos.originals?.map( video => 
                    <CarouselItem key={video.id} {...video} />
                )}
            </Carousel>
        </Categories>

        <Footer />
    </div>
}

export default App;