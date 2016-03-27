import React from 'react';

const Login = React.createClass({
  render() {
    return (
      <div>
        <a href="/auth/github" className="button"> Login with Github </a>
      </div>
    )
  }
})

export default Login;