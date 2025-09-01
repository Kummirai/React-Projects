import React from 'react';

function HomeMovieSection() {
    return (
        <div className={"container-fluid home-movie-section"}
             style={{
                 background: `url("https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/05/Flash-Season-5-Nora-XS.jpg")`,
                 backgroundPosition: "top center",
                 backgroundSize: "cover",
                 backgroundPositionX: "center center",
                 backgroundPositionY: "center center",
             }}>
            <div className={"row h-100"}>
                <div className={"p-5 col-sm-8 home-movie-detail"}>
                    <div className={"w-50 text-white text-blur"}>
                        <h2 className={"display-4 fw-bold"}>The Flash</h2>
                        <div className="d-flex align-items-center justify-content-start my-3">
                            <p className={"text-warning"}>
                                <i className={"fas fa-star"}></i>
                                <i className={"fas fa-star"}></i>
                                <i className={"fas fa-star"}></i>
                                <i className={"fas fa-star"}></i>
                                <i className={"fas fa-star"}></i>
                            </p>
                            <p className={"px-3 fw-bold"}>8.6</p>
                        </div>
                        <p className={"blur-bg"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
                            dicta dignissimos enim exercitationem maxime non odio perferendis perspiciatis recusandae
                            veniam!
                        </p>
                        <button className={"btn btn-primary mt-3"}>Save to WatchList</button>
                    </div>

                </div>
                <div className={"col-sm-4 d-flex flex-column align-items-center justify-content-around p-5"}>
                    <div className={"home-movie-card"}>
                        <img
                            src="https://static0.srcdn.com/wordpress/wp-content/uploads/2023/07/things-the-flash-series-does-better-than-movie.jpg"
                            alt=""/>
                    </div>
                    <div className={"home-movie-card"}>
                        <img
                            src="https://www.hindustantimes.com/ht-img/img/2023/08/28/1600x900/FqzBIW2aQAA3AVq_1693214544605_1693214550714.jfif"
                            alt=""/>
                    </div>
                    <div className={"home-movie-card"}>
                        <img
                            src="https://deadline.com/wp-content/uploads/2016/03/supergirl-flash-crossover-march-28.jpg?w=630"
                            alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeMovieSection;