import { Component } from 'react';
import ReactGA from 'react-ga';

class GoogleAnalytics extends Component {
  componentDidMount() {
    const willInitGa = init();

    if (willInitGa) this.logPage(window.location.origin);
  }

  logPage(url: string) {
    ReactGA.set({
      url,
      location: url,
    });

    ReactGA.pageview(url);
  }

  render() {
    return null;
  }
}

const init = () => {
  const isGAEnabled = process.env.NODE_ENV === 'production';

  if (isGAEnabled) {
    ReactGA.initialize('G-MEJ15Z4MW4');
  }

  return isGAEnabled;
};

export default GoogleAnalytics;
