var React = require('react');
var {Link, IndexLink} = require('react-router')

var Navbar = () => {
  return (
    <div>
      <h2>Navigation Component</h2>
      <div>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
        <Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
      </div>

    </div>
  );
}

module.exports = Navbar;
