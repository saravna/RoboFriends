import React,{Component} from 'react';
import './SearchBox.css';
class SearchBox extends Component{
    render(){
        return(
            <div className="pa2 bg-red tc">
                <input className="pa2 ba bg-black tc br2 dark-red" 
                type="search" 
                placeholder="Search Buddies" 
                onChange={this.props.searchChange}
                />
            </div>
        );
    }
}
export default SearchBox;