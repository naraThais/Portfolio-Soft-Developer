import React from 'react';
import styles from './Principal.module.css';

const Principal = () => {
    return (
        <div className={styles.principal}>
            <img className={styles.clipPathGroup} alt="" src="Rectangle.png" />
            <div className={styles.descricao}>
                <div className={styles.euSouThaisContainer}>
                    <p className={styles.euSouThais}>
                        Eu sou Thais Nara, uma desenvolvedora de software multidisciplinar e designer de UI/UX.
                    </p>
                    <p className={styles.localizadaEmSobral}>
                        Localizada em Sobral, Ceará, Brasil.
                    </p>
                </div>
            </div>
            <b className={styles.titulo}>
                <span className={styles.tituloTxt}>
                    <p className={styles.thaisNara}>
                        <span>Thais Nara</span>
                    </p>
                    <p className={styles.desenvolvedora}>
                        <span className={styles.de}>Desenvolvedora </span>
                    </p>
                    <p className={styles.thaisNara}>
                        <span className={styles.de}>de </span>
                        <span className={styles.software1}>Software</span>
                    </p>
                </span>
            </b>
        </div>
    );
};

export default Principal;
