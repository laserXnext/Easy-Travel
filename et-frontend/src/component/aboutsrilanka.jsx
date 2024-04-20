import React from 'react';
import './about.css';

function About() {
  return (
    <div>
      <div id="myCarousel" className="carousel slide text-center" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <h4>"Sri Lanka is known as,<br/>Pearl of the Indian Ocean is given to this small island nation probably due to its incredible natural beauty,<br/>extraordinary biodiversity as well as its precious gemstones."</h4>
          </div>
          <div className="item">
            <h4>"Sri Lanka, despite covering 25,332 mi², boasts a diverse wildlife,<br/>including 123 species of mammals, 227 bird species, 178 reptile species, and 122 amphibians,<br/>making it a rich and diverse ecosystem."</h4>
          </div>
          <div className="item">
            <h4>"Nuwara Eliya,<br/> a British-built hill country town, is known for its temperate climate<br/>and was once a popular holiday retreat for the British elite."</h4>
          </div>
        </div>
        <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default About;
