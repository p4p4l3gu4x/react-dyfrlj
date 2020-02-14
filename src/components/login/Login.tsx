import React from 'react';
import loginImg from '../../login.svg';

type MyProps = {
    containerRef:any
}
type MyState = {}
export class Login extends React.Component<MyProps, MyState>{
    constructor(props:any) {
        super(props);
    }

    render(){
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Login</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg}/>
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">User Name</label>
                            <input type="text" name="username" placeholder="username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="text" name="password" placeholder="password"/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button className="btn">Login</button>
                </div>
            </div>
        )
    }
}