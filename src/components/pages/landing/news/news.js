import React from 'react';
import { Link } from 'react-router-dom';

import robotChemistImg from './images/robot-chemist-tamp.jpg';
import clarifyImg from './images/clairify.jpg';
import digitalPipette from './images/digital-pipette.jpg';
const News = () => {
    return (
        <>
            <section id="news">News</section>
            <nav className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center w-full">
                {/*TODO: make a hook or obj to import, then use map to make these more compact */}
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={robotChemistImg} alt="robot-chemist" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Chemistry Lab Automation via Constrained Task and Motion Planning</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="badge badge-outline">Under Review</div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">
                                <Link href="https://ac-rad.github.io/robot-chemist-tamp/">Project page</Link>
                            </button>
                            <button className="btn btn-primary">
                                <Link href="https://arxiv.org/abs/2212.09672v2">arXiv</Link>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={clarifyImg} alt="robot-chemist" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Errors are Useful Prompts: Instruction Guided Task Programming with Verifier-Assisted Iterative Prompting
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="badge badge-outline">Under Review</div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">
                                <Link href="https://ac-rad.github.io/clairify/">Project page</Link>
                            </button>
                            <button className="btn btn-primary">
                                <Link href="https://arxiv.org/abs/2303.14100">arXiv</Link>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={digitalPipette} alt="robot-chemist" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Digital pipette: Open hardware for liquid transfer in self-driving laboratories</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <div className="badge badge-outline">Under Review</div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">
                                <Link href="https://doi.org/10.26434/chemrxiv-2023-nvxkg">ChemRxiv</Link>
                            </button>
                            <button className="btn btn-primary">
                                <Link href="https://github.com/ac-rad/digital-pipette">GitHub</Link>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure>
                        <svg
                            class="bd-placeholder-img card-img-top"
                            width="100%"
                            height="225"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-label="Placeholder: Thumbnail"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                        >
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#55595c" />
                            <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                                Thumbnail
                            </text>
                        </svg>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">MVTrans: Multi-View Perception of Transparent Objects</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="badge badge-outline">ICRA 2023</div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">
                                <Link href="https://ac-rad.github.io/MVTrans/">Project page</Link>
                            </button>
                            <button className="btn btn-primary">
                                <Link href="https://arxiv.org/abs/2302.11683">arXiv</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default News;
