import { useState } from 'react'
import infos from './data/infos.js'
import logo from './assets/logo.svg'
import './App.css'
import { Art } from './components/Art/index.js'
import { Past } from './components/Past.js'
import { Contact } from './components/Contact.js'

function App() {
  const [show, setShow] = useState("art")
  const [imgNbr, setImgNbr] = useState(0)
  const [path, setPath] = useState(`/images/${imgNbr}.jpg`)
  const [imgDetails, setImgDetails] = useState(infos[imgNbr])

  type Info = {
    name: string;
    title: string;
    detail: string;
    paper?: string;
    year?: string;
    edition: string;
  }

  type ArtProps = {
    imgDetails: Info;
    path: string;
    imgNbr: number;
  }

  const resNbr = (): void => {
    setShow("art");
    setImgNbr(0);
    setPath(`/images/${imgNbr}.jpg`);
    setImgDetails(infos[0]);
  };

  const nextI = (): void => {
    if (imgNbr >= 15) {
      setImgNbr(0);
    }
    setImgNbr((imgNbr) => imgNbr += 1);
    setPath(`/images/${imgNbr}.jpg`);
    setImgDetails(infos[imgNbr - 1]);
  };

  const pastToGalerry = (): void => {
    resNbr();
    nextI();
  };

  const data = {
    imgDetails,
    path,
    imgNbr,
  } as unknown as ArtProps

  return (
    <div className="App" style={styles.container}>
      <div style={styles.header} >
        <img src={logo} alt="2piano logo" width={'10%'} onClick={() => setShow('art')} />
      </div>
      <div style={styles.content} >
        {show === 'art' ? <div onClick={nextI}> <Art  {...data} /> </div> : show === 'past' ? <Past /> : <Contact />}
      </div>
      <div style={styles.footer} >
        <p onClick={() => show === 'past' ? pastToGalerry() : setShow('past')}>PAST</p>
        <p onClick={() => setShow('contact')}>CONTACT</p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    margin: 0, padding: '20px',
  },
  header: {
    margin: '0 0 20 0', with: '100vw', height: '10%',
  },
  content: {
    margin: 0, with: '100vw', height: '80%', overflow: 'auto',
  },
  footer: {
    margin: 0, with: '100vw', height: '10%',
  }
}

export default App
