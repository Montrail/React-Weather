var React = require('react');
var {Link} = require('react-router');

var About = () => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>
        This is a weather application build on React.
        I have built this for 'The Complete React Web App Developer Course'.
      </p>
      <hr></hr>
      <p>
        <b>Here are some of the tools I used:</b>
      </p>
      <ul>
        <li><a href="https://facebook.github.io/react">React</a> -
          This was the JavaScript framework used.
        </li>
      </ul>
      <ul>
        <li><a href="http://openweathermap.org">Open Weather Map</a> -
          I used Open Weather Map to search for weather data by city name.
        </li>
      </ul>
      <ul>
        <li><a href="https://github.com">Git Hub</a> - I used Git Hub as my
          version control repository.
        </li>
      </ul>
    </div>
  );
}

module.exports = About;
