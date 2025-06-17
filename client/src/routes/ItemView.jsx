import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactLoading from 'react-loading';
import Item from '../components/Item/Item';
import { API_ENDPOINTS } from '../config/api';

const ProductView = (props) => {
    const param = useParams()
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        window.scrollTo(0, 0)
        axios.get(API_ENDPOINTS.ITEMS)
            .then(res => {
                const filteredItem = res.data.filter((item) => item._id === param.id)
                setItem(filteredItem.length > 0 ? filteredItem[0] : null)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })

    }, [param.id])

    return (
        <div className="d-flex min-vh-100 w-100 justify-content-center align-items-center m-auto">
            {loading && <ReactLoading type="balls" color='#FFE26E' height={100} width={100} className='m-auto' />}
            {item && <Item item={item} />}
            {!loading && !item && <div>Item not found</div>}
        </div>
    );
}

export default ProductView;