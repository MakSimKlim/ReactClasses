import React from 'react';

class Range extends React.Component
{
    state = {number:110}
    range = (event) => this.setState({number: event.target.value})

    render()
    {
        return(
            <>            
                <input type="range" min="100" max="200" value={this.state.number} onChange={this.range}/>
                <p>{this.state.number}</p>                
            </>
        )
    }
}
export default Range;