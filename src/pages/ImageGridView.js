import React, {useState, useEffect} from 'react'
import { getThumbnails } from '../services/imageService'
import InfiniteScroll from 'react-infinite-scroll-component';


const ImageGridView = () => {
    const [thumbnails, setThumbnails] = useState([])
    const [count, setCount] = useState({
        prev: 0,
        next: 100
      })
    const [hasMore, setHasMore] = useState(true);
    const [current, setCurrent] = useState(thumbnails.slice(count.prev, count.next))

    useEffect(() => {
        const addThumbnails = async () => {
            let data = await getThumbnails()
            setThumbnails(data)
        }
        addThumbnails()
    }, [])
    
    const getMoreData = () => {
      console.log('getting data')
      if (current.length === thumbnails.length) {
        setHasMore(false);
        return;
      }
      setTimeout(() => {
        setCurrent(current.concat(thumbnails.slice(count.prev + 100, count.next + 100)))
      }, 2000)
      setCount((prevState) => ({ prev: prevState.prev + 100, next: prevState.next + 100 }))
    }
  

    return (
        <>
        <h2>Welcome to the gallery</h2>
        <InfiniteScroll
            dataLength={current.length}
            next={getMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            >
        <div>
        {current && current.map(item => (
            <img key={item[0]} src={item[1]} alt='placeholder' />
        ))}
        </div>
        </InfiniteScroll>
        </>
    )
}

export default ImageGridView