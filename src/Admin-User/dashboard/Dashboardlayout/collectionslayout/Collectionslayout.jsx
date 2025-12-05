import Sidebar from '../../../common/sidebar/Sidebar'
import Collections from '../../../collection/Collections'
import './Collectionslayout.css'
import Rightbar from '../../../common/rightbar/rightbar'


const Collectionslayout = () => {
    return (
        <div className='collectionslayoutContainer'>collectionslayout
            <Sidebar />
            <Collections />
            <Rightbar />
        </div>
    )
}

export default Collectionslayout