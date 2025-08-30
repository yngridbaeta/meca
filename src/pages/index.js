import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import estilos from './index.module.css';
import logo from './logo.png';
import notebookPrincipal from './notebook1.png';
import notebookSecundario from './notebook2.png';
import iconeMySql from './mysql.png';
import iconeReact from './react.png';
import iconeRaspberry from './raspberry.png';
import iconeDjango from './django.png';
import iconeDBeaver from './esq.png';
import logo65Anos from './logonos.png';
import logoBosch from './logoBosch.png';
import LanguageToggle from './LanguageToggle';
import useBaseUrl from '@docusaurus/useBaseUrl';


export default function HomePT() {
  return (
    <div className={estilos.container}>
      <LanguageToggle />
      {/* Cabeçalho */}
      <header className={estilos.cabecalho}>
        <img
          src={logo}
          alt={translate({ message: 'Logo OptiFlow' })}
          className={estilos.logo}
        />
        <h3 className={estilos.subtitulo}>
          <Translate>MONITORAMENTO DA LINHA DE PRODUÇÃO</Translate>
        </h3>
      </header>

      {/* Seção Visão Geral */}
      <section className={estilos.secao}>
        <h2 className={estilos.titulo}>
          <Translate>VISÃO GERAL</Translate>
        </h2>
        <p className={estilos.texto}>
          <Translate>
            Em ambientes industriais, falhas no reabastecimento de linhas de
            produção podem causar atrasos e prejuízos.
          </Translate>
        </p>
        <figure className={estilos.imagemWrapper}>
          <img
            src={notebookPrincipal}
            alt={translate({ message: 'Notebook mostrando OptiFlow' })}
            className={estilos.notebook}
          />
        </figure>
        <p className={estilos.texto}>
          <Translate>
            Este projeto propõe uma solução inteligente que integra sensores a
            uma Raspberry Pi com inteligência artificial para monitorar, em
            tempo real, o processo de reabastecimento.
          </Translate>
        </p>
<p className={estilos.texto}>
  A tecnologia garante mais{' '}
  <strong style={{ color: '#03D5B6' }}>
    eficiência
  </strong>,{' '}
  <strong style={{ color: '#03D5B6' }}>
    reduz falhas humanas
  </strong>, e contribui para a{' '}
  <strong style={{ color: '#03D5B6' }}>
    continuidade e segurança da produção
  </strong>, alinhando-se aos princípios da indústria 4.0.
</p>



      </section>

      {/* Seção Machine Learning */}
      <section className={estilos.secaoNot}>
        <div className={estilos.mlWrapper}>
          <h2 className={estilos.mlTitulo}>
            <Translate>Machine Learn</Translate>
          </h2>
          <p className={estilos.mlSubtitulo}>
            <Translate>aplicado à eficiência industrial</Translate>
          </p>
        </div>
        <figure className={estilos.imagemWrapper}>
          <img
            src={notebookSecundario}
            alt={translate({ message: 'Dashboard OptiFlow' })}
            className={estilos.notebook}
          />
        </figure>
      </section>

      {/* Tecnologias */}
      <section className={estilos.secaoTecnologias}>
        <h2 className={estilos.titulo}>
          <Translate>Tecnologias Utilizadas</Translate>
        </h2>
        <div className={estilos.cartoes}>
          <div className={estilos.cartao}>
            <img src={iconeMySql} alt={translate({ message: 'Ícone MySQL' })} />
            <p>MySQL</p>
          </div>
          <div className={estilos.cartao}>
            <img src={iconeReact} alt={translate({ message: 'Ícone React' })} />
            <p>React</p>
          </div>
          <div className={estilos.cartao}>
            <img
              src={iconeRaspberry}
              alt={translate({ message: 'Ícone Raspberry' })}
            />
            <p>Raspberry Pi</p>
          </div>
          <div className={estilos.cartao}>
            <img
              src={iconeDjango}
              alt={translate({ message: 'Ícone Django' })}
              id={estilos.django}
            />
            <p>Django</p>
          </div>
          <div className={estilos.cartao}>
            <img
              src={iconeDBeaver}
              alt={translate({ message: 'Ícone DBeaver' })}
            />
            <p>DBeaver</p>
          </div>
        </div>

        <section className={estilos.botao}>
          <a
            href={useBaseUrl('/OptiFlow.pdf')}
            className={estilos.botaoDocumento}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Translate>Acessar Documentação</Translate>
          </a>
        </section>


        <hr className={estilos.linha1} />

        <section className={estilos.footer}>
          <div className={estilos.logos}>
            <img
              src={logo65Anos}
              alt={translate({ message: 'Logo 65 Anos' })}
            />
            <img
              src={logoBosch}
              alt={translate({ message: 'Logo Bosch' })}
            />
          </div>

          <hr className={estilos.vertical} />

          <div className={estilos.equipe}>
            <h6>
              <Translate>Equipe</Translate>
            </h6>
            <p>Júlia Silva, Karolyne Ribeiro, Luiz Cagnan, Mateus França</p>
          </div>
        </section>
      </section>
    </div>
  );
}
