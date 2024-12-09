import React from 'react';

class User extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log("UserConstructor");
    }
    componentDidMount()
    {
        console.log("UserDidMount");
    }
    componentDidUpdate()
    {
        console.log("UserDidUpdate");
    }
    componentWillUnmount()
    {
        console.log("UserWillUnmount");
    }
    render()
    {
        return(
            <>
            <div>
                <ul>Name:Anna</ul>
                <ul>Email:anya@mishanya.ru</ul>
                <ul>+78901234567</ul>
            </div>            
            </>
        )
    }

}
export default User;