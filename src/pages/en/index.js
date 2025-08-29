import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import estilos from '../index.module.css';  // note que aqui é ../ porque está em pasta "en"
import logo from '../logo.png';
import notebookPrincipal from '../notebook1.png';
import notebookSecundario from '../notebook2.png';
import iconeMySql from '../mysql.png';
import iconeReact from '../react.png';
import iconeRaspberry from '../raspberry.png';
import iconeDjango from '../django.png';
import iconeDBeaver from '../esq.png';
import logo65Anos from '../logonos.png';
import logoBosch from '../logoBosch.png';
import LanguageToggle from '../LanguageToggle';

export default function HomeEN(){
  return (
    <div className={estilos.container}>
      <LanguageToggle/>
      {/* Header */}
      <header className={estilos.cabecalho}>
        <img
          src={logo}
          alt={translate({ message: 'OptiFlow Logo' })}
          className={estilos.logo}
        />
        <h3 className={estilos.subtitulo}>
          <Translate>PRODUCTION LINE MONITORING</Translate>
        </h3>
      </header>

      {/* Overview Section */}
      <section className={estilos.secao}>
        <h2 className={estilos.titulo}>
          <Translate>OVERVIEW</Translate>
        </h2>
        <p className={estilos.texto}>
          <Translate>
            In industrial environments, failures in production line replenishment can cause delays and losses.
          </Translate>
        </p>
        <figure className={estilos.imagemWrapper}>
          <img
            src={notebookPrincipal}
            alt={translate({ message: 'Notebook showing OptiFlow' })}
            className={estilos.notebook}
          />
        </figure>
        <p className={estilos.texto}>
          <Translate>
            This project proposes an intelligent solution that integrates sensors with a Raspberry Pi and artificial intelligence to monitor the replenishment process in real time.
          </Translate>
        </p>
        <p className={estilos.texto}>
          {translate({
            message:
              'The technology ensures more {efficiency}, {reduces}, and contributes to {continuity}, aligning with Industry 4.0 principles.',
            id: 'production.text',
            values: {
              efficiency: <strong>efficiency</strong>,
              reduces: <strong>reduces human errors</strong>,
              continuity: <strong>continuity and safety of production</strong>,
            },
          })}
        </p>
      </section>

      {/* Machine Learning Section */}
      <section className={estilos.secaoNot}>
        <div className={estilos.mlWrapper}>
          <h2 className={estilos.mlTitulo}>
            <Translate>Machine Learning</Translate>
          </h2>
          <p className={estilos.mlSubtitulo}>
            <Translate>applied to industrial efficiency</Translate>
          </p>
        </div>
        <figure className={estilos.imagemWrapper}>
          <img
            src={notebookSecundario}
            alt={translate({ message: 'OptiFlow Dashboard' })}
            className={estilos.notebook}
          />
        </figure>
      </section>

      {/* Technologies */}
      <section className={estilos.secaoTecnologias}>
        <h2 className={estilos.titulo}>
          <Translate>Technologies Used</Translate>
        </h2>
        <div className={estilos.cartoes}>
          <div className={estilos.cartao}>
            <img src={iconeMySql} alt={translate({ message: 'MySQL Icon' })} />
            <p>MySQL</p>
          </div>
          <div className={estilos.cartao}>
            <img src={iconeReact} alt={translate({ message: 'React Icon' })} />
            <p>React</p>
          </div>
          <div className={estilos.cartao}>
            <img
              src={iconeRaspberry}
              alt={translate({ message: 'Raspberry Pi Icon' })}
            />
            <p>Raspberry Pi</p>
          </div>
          <div className={estilos.cartao}>
            <img
              src={iconeDjango}
              alt={translate({ message: 'Django Icon' })}
              id={estilos.django}
            />
            <p>Django</p>
          </div>
          <div className={estilos.cartao}>
            <img
              src={iconeDBeaver}
              alt={translate({ message: 'DBeaver Icon' })}
            />
            <p>DBeaver</p>
          </div>
        </div>

        <hr className={estilos.linha1} />

        <section className={estilos.footer}>
          <div className={estilos.logos}>
            <img
              src={logo65Anos}
              alt={translate({ message: '65 Years Logo' })}
            />
            <img
              src={logoBosch}
              alt={translate({ message: 'Bosch Logo' })}
            />
          </div>

          <hr className={estilos.vertical} />

          <div className={estilos.equipe}>
            <h6>
              <Translate>Team</Translate>
            </h6>
            <p>Júlia Silva, Karolyne Ribeiro, Luiz Cagnan, Mateus França</p>
          </div>
        </section>
      </section>
    </div>
  );
}
