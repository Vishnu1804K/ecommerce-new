import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Landing from "../components/Landing/Landing";
import FeaturedItems from "../components/Featured/Items/FetauredItems";
import FeaturedCategories from "../components/Featured/Categories/FeaturedCategories";
import { TabTitle } from "../utils/General";
import { API_ENDPOINTS } from "../config/api";


const Home = () => {
    const [featuredItems, setFeaturedItems] = useState()
    TabTitle("Home - Shema");

    useEffect(() => {
        axios.get(API_ENDPOINTS.ITEMS)
            .then(res => setFeaturedItems(res.data))
            .catch(err => console.log(err))

        window.scrollTo(0, 0)
    }, [])

    return (
        <Fragment>
            <Landing />
            <FeaturedCategories />
            <FeaturedItems items={featuredItems} />
        </Fragment>
    );
}

export default Home;