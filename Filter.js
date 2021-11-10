import React from 'react'
import StarRating from './StarRating'

const Filter = ({rating,handleRating,text,handleText}) => {
   
    return (
        <div className='header-container'>
            <h1>Our movie app</h1>
            <div className="search-container">
                <input className="inp" type="" value={text} onChange={handleText}/>
                <StarRating rating={rating} handleRating={handleRating}/>
            </div>
        </div>
    )
}

export default Filter

// export default class Form extends Component {
//     state={
//         newText:''
//     };
//     handleChange=(e)=>this.setState({newText:e.target.value})
//     handleSubmit=(e)=>{e.preventDefault();
//     this.props.add(this.state.newText)
//     this.setState({newText:''})
//     }
//     render() {
//         return (
//             <div>
//                  <form onSubmit={this.handleSubmit}>
//                 <input type='text' value={this.state.newText} onChange={()=>this.handleChange}></input>
//                 <button type='submit'>Add</button>
//             </form>
//             </div>
//         )
//     }
// }
