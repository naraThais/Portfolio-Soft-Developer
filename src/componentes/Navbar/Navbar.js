import { FunctionComponent, useCallback } from 'react';
import styles from './Navbar.module.css';


const Navbar= () => {
  	
  	const onSobreMimTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onProjetosTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onEntreEmContatoClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.navbar}>
      			<div className={styles.navbar1}>
        				<div className={styles.tnParent}>
          					<div className={styles.tn}>tn</div>
          					<div className={styles.thaisNara}>
            						<span className={styles.thaisNaraTxtContainer}>
              							<span>{`THAIS `}</span>
              							<span className={styles.nara}>NARA</span>
            						</span>
          					</div>
        				</div>
        				<div className={styles.sobreMim}>
          					<div className={styles.projetos} onClick={onSobreMimTextClick}>Sobre Mim</div>
          					<div className={styles.projetos} onClick={onProjetosTextClick}>Projetos</div>
          					<div className={styles.entreEmContato} onClick={onEntreEmContatoClick}>Entre em Contato</div>
        				</div>
      			</div>
    		</div>);
};

export default Navbar;
