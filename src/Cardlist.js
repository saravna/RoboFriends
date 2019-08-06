import React ,{Component} from 'react';
import Card from './Card';
class Cardlist extends Component{
    render(){
        let robots=[];
        if(this.props.robots.length===0)
            throw new Error('No Robots Found');
        for(var i=0;i<this.props.robots.length;i++){
            robots.push(<Card key={i} name={this.props.robots[i]}/>);
        }
        return (
            <div>
                    {robots};
            </div>
        );
    }
}
export default Cardlist;