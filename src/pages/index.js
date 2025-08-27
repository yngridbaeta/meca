import React from 'react';
import styles from './index.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <img src="/img/opti.png" alt="Logo OptiFlow" className={styles.logo} />
      </div>

      <h2>Contexto</h2>
      <p>
        Apesar dos avanços tecnológicos, as operações industriais ainda enfrentam desafios relacionados à eficiência e segurança no ambiente produtivo.
      </p>
      <p>
        Nesse cenário, surge a necessidade de monitorar processos críticos, como o reabastecimento em linhas de trabalho complexas, para evitar falhas que possam comprometer a produção.
      </p>

      <h2>Tecnologias Utilizadas</h2>
      <div className={styles.tools}>
        <div>
          <img src="/img/django.png" alt="Django" />
          <p>Django REST</p>
        </div>
        <div>
          <img src="/img/rasp.png" alt="Raspberry Pi" />
          <p>Raspberry Pi</p>
        </div>
        <div>
          <img src="/img/mysql.png" alt="MySQL" />
          <p>MySQL</p>
        </div>
        <div>
          <img src="/img/dbeaver.png" alt="DBeaver" />
          <p>DBeaver</p>
        </div>
        <div>
          <img src="/img/react.png" alt="React" />
          <p>React</p>
        </div>
      </div>

      <h2>Solução</h2>
      <p>
        Desenvolveu-se um sistema que integra sensores conectados à Raspberry Pi equipada com inteligência artificial, possibilitando o monitoramento contínuo do processo de reabastecimento.
      </p>
      <p>
        A solução fornece informações precisas e oportunas aos reabastecedores, garantindo a continuidade da produção e prevenindo falhas operacionais.
      </p>

      <h2>Resultado Esperado</h2>
      <p>
        O projeto visa evitar perdas financeiras e operacionais por meio do monitoramento inteligente do reabastecimento.
      </p>
      <p>
        Setores como KSZ e FSH devem apresentar redução significativa de falhas, enquanto áreas como KVS3 e KVS também serão beneficiadas.
      </p>
      <p>
        Espera-se garantir o abastecimento contínuo, reduzir custos, oferecer dados para decisões rápidas e elevar a eficiência e segurança do processo.
      </p>

      
    </div>
  );
}
