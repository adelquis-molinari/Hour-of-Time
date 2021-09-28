import React from 'react';
import Avatar from '../../img/Avatar.jpg';
import './About.css';

export default function About(){
    return(
        <div className="container ">
            <div className="row d-flex">
                <div className="col-lg-3">
                    <img src={Avatar} alt="" className="rounded-circle avatarMe sombra" />
                </div>
                <div className="col-lg-9 pt-5 px-lg-5 bodyMe sombra">
                    <h2>Molinari Adelquis</h2>
                    <h5 className='text-secondary'>Developer Full Stack (in back)</h5>
                    <hr width='50%' />
                    <p className='px-5'>Soy un desarrollador independiente que se encuentra en formación en el curso de <strong> Evuca.</strong><br/> Mi principal motivacion en encontrar nuevos desafios donde pueda aportar mi miguaja de codigo y aprender de mis colegas.
                    </p>
                    <div className="progressMe">
                        <h5>HTML</h5>
                        <div className="progress">
                            <div className="progress-bar bg-info w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h5>CSS</h5>
                        <div className="progress">
                            <div className="progress-bar bg-info w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h5>JS</h5>
                        <div className="progress">
                            <div className="progress-bar bg-info w-75" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h5>React</h5>
                        <div className="progress">
                            <div className="progress-bar bg-info w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="social">
                        <a href="https://github.com/adelquis-molinari"><i class="fab fa-github-square github"></i></a>
                        <a href="https://www.linkedin.com/in/adelquis-molinari-05b12220a/" target='black'><i class="fab fa-linkedin linkedin"></i></a>
                        <a href="https://www.instagram.com/adelkismolinari/?hl=es"><i class="fab fa-instagram-square instagram"></i></a>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}