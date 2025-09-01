import React from 'react';

function HomeMovieSection() {
    return (
        <div className={"container-fluid home-movie-section bg-secondary"}
             style={{
                 background: `url("https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/0c730836-253b-4338-a3d1-a6a44a3384e0/19d57a2c-4291-48ba-bab2-c8fdc4ba834d?host=wbd-images.prod-vod.h264.io&partner=beamcom)"`,
                 backgroundPosition: "center center",
                 backgroundSize: "cover",
                 backgroundPositionX: "center center",
                 backgroundPositionY: "center center",
             }}>
            <div className={"row h-100"}>
                <div className={"p-5 col-sm-8 home-movie-detail"}>
                    <div className={"w-50 text-white text-blur"}>
                        <h2 className={"display-4 fw-bold"}>Black Adam</h2>
                        <div className="d-flex align-items-center justify-content-start my-3">
                            <p className={"text-warning"}>
                                <i className={"fas fa-star"}></i>
                                <i className={"fas fa-star"}></i>
                                <i className={"fas fa-star"}></i>
                                <i className={"fas fa-star"}></i>
                                <i className={"fas fa-star"}></i>
                            </p>
                            <p className={"px-3 fw-bold"}>8.2</p>
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
                            src="https://i.guim.co.uk/img/media/db61784a1206481f1324e816340ffc4989b2c73c/0_18_4000_2400/master/4000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=ff6e84a8b285e7b80e3c7f04bf7a8ba1"
                            alt=""/>
                    </div>
                    <div className={"home-movie-card"}>
                        <img
                            src="https://i.guim.co.uk/img/media/db61784a1206481f1324e816340ffc4989b2c73c/0_18_4000_2400/master/4000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=ff6e84a8b285e7b80e3c7f04bf7a8ba1"
                            alt=""/>
                    </div>
                    <div className={"home-movie-card"}>
                        <img
                            src="https://i.guim.co.uk/img/media/db61784a1206481f1324e816340ffc4989b2c73c/0_18_4000_2400/master/4000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=ff6e84a8b285e7b80e3c7f04bf7a8ba1"
                            alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeMovieSection;