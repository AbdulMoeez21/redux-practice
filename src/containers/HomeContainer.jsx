import {connect} from 'react-redux'
import Home from '../components/Home'
import {addToCart} from '../services/Action/actions'

const mapStateToProps=state=>({
//cardData :state.data
})

const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home
