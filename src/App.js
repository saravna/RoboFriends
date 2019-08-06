import React,{Component} from 'react';
import { Robots } from './Robots';
import SearchBox from './SearchBox';
import './App.css'
import Cardlist from './Cardlist';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
class App extends Component{
    constructor(){
        super();
        this.state={
            robots: Robots,
            searchField: ''
        };
    }

    onSearchChange=(event)=>{
        this.setState({searchField:event.target.value});
    }
    render(){
        const filteredRobots = this.state.robots.filter(robot=>{
            return robot.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        return(
            <div>
                <h1 className="mainhead tc f1">BuddyList</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <Cardlist robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
                
            </div>
        );
    }
}
export default App;