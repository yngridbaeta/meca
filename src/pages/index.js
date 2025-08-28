import React from 'react';
import estilos from './index.module.css';
import logo from './logo.png';
import notebookPrincipal from './notebook1.png';
import notebookSecundario from './notebook2.png';
import iconeMySql from './mysql.png';
import iconeReact from './react.png';
import iconeRaspberry from './raspberry.png';
import iconeDjango from './django.png';
import iconeDBeaver from './esq.png';
import logo65Anos from './logo65Anos.png'
import logoBosch from './logoBosch.png'


export default function Home() {
  return (
    <div className={estilos.container}>
      {/* Cabeçalho */}
      <header className={estilos.cabecalho}>
        <img src={logo} alt="Logo OptiFlow" className={estilos.logo} />
        <h3 className={estilos.subtitulo}>MONITORAMENTO DA LINHA DE PRODUÇÃO</h3>
      </header>
 
      {/* Seção Visão Geral */}
      <section className={estilos.secao}>
        <h2 className={estilos.titulo}>VISÃO GERAL</h2>
        <p className={estilos.texto}>
          Em ambientes industriais, falhas no reabastecimento de linhas de produção podem causar atrasos e prejuízos.
        </p>
        
        <figure className={estilos.imagemWrapper}>
          <img src={notebookPrincipal} alt="Notebook mostrando OptiFlow" className={estilos.notebook} />
        </figure>
       
        <p className={estilos.texto}>
          Este projeto propõe uma solução inteligente que integra sensores a uma Raspberry Pi com inteligência artificial
          para monitorar, em tempo real, o processo de reabastecimento.
        </p>
        <p className={estilos.texto}>
          A tecnologia garante mais <strong>eficiência</strong>, <strong>reduz falhas humanas</strong> e contribui para a
          <strong> continuidade e segurança da produção</strong>, alinhando-se aos princípios da indústria 4.0.
        </p>
      </section>

      {/* Seção Machine Learning */}
      <section className={estilos.secaoNot}>
        <div className={estilos.mlWrapper}>
          <h2 className={estilos.mlTitulo}>Machine Learn</h2>
          <p className={estilos.mlSubtitulo}>applied to industrial efficiency</p>
        </div>

        <figure className={estilos.imagemWrapper}>
          <img src={notebookSecundario} alt="Dashboard OptiFlow" className={estilos.notebook} />
        </figure>
      </section>
      
      {/* Tecnologias */}
      <section className={estilos.secaoTecnologias}>
        <h2 className={estilos.titulo}>Tecnologias Utilizadas</h2>
        <div className={estilos.cartoes}>
          <div className={estilos.cartao}>
            <img src={iconeMySql} alt="Ícone MySQL" />
            <p>MySQL</p>
          </div>
          <div className={estilos.cartao}>
            <img src={iconeReact} alt="Ícone React" />
            <p>React</p>
          </div>
          <div className={estilos.cartao}>
            <img src={iconeRaspberry} alt="Ícone Raspberry" />
            <p>Raspberry Pi</p>
          </div>
          <div className={estilos.cartao}>
            <img src={iconeDjango} alt="Ícone Django" id={estilos.django} />
            <p>Django</p>
          </div>
          <div className={estilos.cartao}>
            <img src={iconeDBeaver} alt="Ícone DBeaver" />
            <p>DBeaver</p>
          </div>
        </div>

        <hr className={estilos.linha1}/>

        <secion className={estilos.footer}>
          <div className={estilos.logos}>
            <img src={logo65Anos}></img>
            <img src={logoBosch}></img>
          </div>

          <hr className={estilos.vertical}/>

          <div className={estilos.equipe}>
            <h6>Equipe</h6>
            <p>Júlia Silva, Katolyne Ribeiro, Luiz Cagnan, Mateus França</p>
          </div>
        </secion>
      </section>
    </div>
  );
}
