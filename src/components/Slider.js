import React from 'react';

import ChevronRight from 'react-icons/lib/fa/chevron-right';
import ChevronLeft from 'react-icons/lib/fa/chevron-left';
import Slide from './Slide';
import ArrowControl from './ArrowControl';

import './style.scss';

import fetch from '../utils/fetch';

class Slider extends React.Component {
  state = {
    images: [],
    activeIndex: 0
  };

  async componentDidMount() {
    const imageBaseURL = 'https://screeningtest.vdocipher.com/api/image/';

    const data = await fetch(imageBaseURL, {
      method: 'GET'
    });

    const imagePromises = data.map(async item => {
      const url = `${imageBaseURL}${item.id}`;
      return fetch(url, {
        method: 'POST'
      });
    });

    const images = await Promise.all(imagePromises);
    this.setState({ images, activeIndex: 0 });

    const { autoplay } = this.props;
    if (autoplay) {
      this.interval = setInterval(() => {
        this.goToNextSlide();
      }, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderSlide = () => {
    const { images, activeIndex } = this.state;
    const activeImage = images[activeIndex];

    return <Slide image={activeImage} />;
  };

  goToPreviousSlide = () => {
    const { images, activeIndex } = this.state;

    this.setState({
      activeIndex: (activeIndex - 1 + images.length) % images.length
    });
  };

  goToNextSlide = () => {
    const { images, activeIndex } = this.state;

    this.setState({
      activeIndex: (activeIndex + 1) % images.length
    });
  };

  render() {
    return (
      <React.Fragment>
        <h2 className="center">Avengers Avenue</h2>
        <div className="slider">
          {this.renderSlide()}

          <ArrowControl onClickHandler={this.goToPreviousSlide} next={false}>
            {() => <ChevronLeft />}
          </ArrowControl>
          <ArrowControl onClickHandler={this.goToNextSlide} next>
            {() => <ChevronRight />}
          </ArrowControl>
        </div>
      </React.Fragment>
    );
  }
}

export default Slider;
