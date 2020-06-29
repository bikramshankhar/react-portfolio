import React from "react";
import Container from "../components/Container";

function Portfolio() {
  return (

      <Container>
        <section className="portfolio">
          <div className="container">
              <h2 className="title mt-5">Portfolio</h2>
                <div className="row">
                <div class="col-sm-6 col-md-4 card py-3">
                    <img
                    className="img" src={require("../components/assets/images/codequiz.png")} alt="code quiz"
                    />
                    <h5 className="mt-3"> Code quiz</h5>
                    <p>A short quiz with 5 questions to the user with 75 seconds as a count down. Every time the user gets a answer wrong, 15 seconds are deducted from the countdown clock.</p>
                    <a href="https://github.com/bikramshankhar/Code-quiz">Link to Github repository</a>
                    <a href="https://bikramshankhar.github.io/Code-quiz">Link to Deployed</a>

                  </div> 

                <div class="col-sm-6 col-md-4 card py-3">
                    <img className="img" src={require("../components/assets/images/weather.png")} alt="weather dashborad"
                    />
                    <h5 className="mt-3">Weather-Dashborad</h5>
                    <p>The weather dashboard is an interactive web application that lets users get the current weather status and the 5 day weather forecast for multiple cities.</p>
                    <a href="https://github.com/bikramshankhar/Weather-Dashborad">Link to Github repository</a>
                    <a href="hhttps://bikramshankhar.github.io/Weather-Dashborad/">Link to Deployed</a>

                  </div>    
            
                <div class="col-sm-6 col-md-4 card py-3">
                    <img className="img" src={require("../components/assets/images/flyte.png")} alt="Me"
                    />
                    <h5 className="mt-3">Flyte</h5>
                    <p>a finance app that allows the user to search for data about specific stocks. Users can search through a list of common and popular stocks and see detailed information about their daily performance as well as any news articles that may be of interest to the investor.</p>
                    <a href="https://github.com/kyleres/Finance_App">Link to Github repository</a>
                    <a href="https://kyleres.github.io/Finance_App/">Link to Deployed</a>

                  </div>    
             
                <div class="col-sm-6 col-md-4 card py-3">
                    <img className="img" src={require("../components/assets/images/note-taker.png")} alt="note taker"
                    />
                    <h5 className="mt-3">Note-Taker</h5>
                    <p>A note taker app purpose is to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.</p>
                    <a href="https://github.com/bikramshankhar/Note-Taker">Link to Github repository</a>
                    <a href="https://shielded-citadel-98819.herokuapp.com/">Link to Deployed</a>

                  </div>    
              
                <div class="col-sm-6 col-md-4 card py-3">
                    <img className="img" src={require("../components/assets/images/burger.png")} alt="burger"
                    />
                    <h5 className="mt-3">Burger</h5>
                    <p>This app lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, the app will display the burger on the left side of the page and when the user clicks bevour button, the burger will move to the right side of the page.</p>
                    <a href="https://github.com/bikramshankhar/Node-Express-Handlebars">Link to Github repository</a>
                    <a href="https://glacial-mountain-50073.herokuapp.com/burgers">Link to Deployed</a>

                  </div>    
           
                <div class="col-sm-6 col-md-4 card py-3">
                    <img className="img"src={require("../components/assets/images/stockwatch.png")} alt="stockwatch"
                    />
                    <h5 className="mt-3">Stock Watch</h5>
                    <p>Stock watch app allows users to track an unlimited amount of stocks and filter their tracked stocks based on buy and sell price limits.</p>
                    <a href="https://github.com/JSMBDevCorp/Project2">Link to Github repository</a>
                    <a href="https://thawing-sea-68388.herokuapp.com/">Link to Deployed</a>

                  </div>    
                </div>
           </div>
         </section>
      </Container>
  );
}

export default Portfolio;
