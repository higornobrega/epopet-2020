import React from 'react';
import '../Local/styles.css';
//import '../local/reset.css'

function Local() {
    return (
        <div className="local-root">
            <div className="style-font">
                <div className="local-format">
                    <h1>Conheça o sede do evento</h1>
                    <div className="about-caico">
                        <p className="about-caico-text">Caicó é um município brasileiro pertencente ao estado do Rio Grande do Norte.
                        Principal cidade da região do Seridó, localiza-se na zona central do estado,
                        distante 282 km da capital estadual, Natal.
                        Leia mais sobre o município de Caicó <a rel="noopener noreferrer" href="https://pt.wikipedia.org/wiki/Caic%C3%B3" target="_blank">clicando aqui.</a>
                        </p><iframe title="As marcas de Caicó" className="video-caico" width="560" height="250" src="https://www.youtube.com/embed/HNQdWs9XJGM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </div>
                    <div className="about-caico">
                        <p className="about-caico-text">O Centro de Ensino Superior do Seridó (CERES) da Universidade Federal
                        do Rio Grande do Norte é formado pelos campi universitários de Caicó
                        e Currais Novos. Sua estrutura acadêmica é formada por oito Departamentos
                    que oferecem treze cursos de graduação presenciais e dois cursos de mestrado.</p><iframe title="Tô no campus CERES - Caicó" width="560" height="250" src="https://www.youtube.com/embed/ZpSCXavd5dA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="video-caico"></iframe>

                        <h1>Veja mais sobre Caicó/RN</h1>
                        <div className="mais-foto">
                            <p>Clique nas imagens e veja mais alguns pontos de visitação     de Caicó/RN.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Local;