import { useEffect, useState } from 'react'
import { Art } from './components/Art.js'
import { Past } from './components/Past.js'
import { Contact } from './components/Contact.js'
import { iPhone } from './utils/Constants.utils.js'
import infos from './data/infos.js'
import logo from './assets/logo.svg'

let wIW = 0;

function App() {
  const [show, setShow] = useState("art")
  const [imgNbr, setImgNbr] = useState(0)
  const [path, setPath] = useState(`/images/${imgNbr}.jpg`)
  const [imgDetails, setImgDetails] = useState(infos[imgNbr])

  type Info = {
    name: string;
    title: string;
    detail: string;
    edition: string;
    paper?: string;
    year?: string;
  }

  type ArtProps = {
    imgDetails: Info;
    path: string;
    imgNbr: number;
    fn: Function
  }

  let data = {
    imgDetails,
    path,
    imgNbr,
  } as unknown as ArtProps


  const restAll = (): void => {
    setShow("art");
    setImgNbr(0);
    setPath(`/images/0.jpg`);
    setImgDetails(infos[0]);
  };

  const nextI = async (): Promise<ArtProps> => {
    if (imgNbr >= 15) {
      setImgNbr(0);
      setPath(`/images/${imgNbr}.jpg`);
      setImgDetails(infos[imgNbr]);
    }
    setImgNbr((imgNbr) => imgNbr += 1);
    setPath(`/images/${imgNbr}.jpg`);
    setImgDetails(infos[imgNbr - 1]);

    data = {
      imgDetails,
      path,
      imgNbr,
    } as unknown as ArtProps
    return data
  };

  const pastToGalerry = (): void => {
    restAll();
    nextI();
  };

  const handleResize = () => {
    const cWIW = window.innerWidth;
    if (cWIW !== window.innerWidth) {
      wIW = cWIW;
      const wIH = window.innerHeight;
      document.documentElement.style.setProperty('--wIH', `${wIH}`)
    }
  }

  handleResize();

  useEffect(() => {
    if (iPhone) {
      window.addEventListener("resize", handleResize)
    }
    return () => {
      if (iPhone) {
        window.removeEventListener("resize", handleResize)
      }
    }
  })

  const dt = {
    data,
    fn: nextI
  }

  return (
    <div className="flex flex-col h-full lg:h-screen justify-center items-center gap-5 p-8 lg:p-0">
      <div className="w-full flex flex-col justify-center items-center h-1/8">
        <img className="aspect-[265.01,248.09] h-[5rem]" src={logo} alt="2piano logo" onClick={() => restAll()} />
      </div>
      {show === 'art' ?
        <div className="max-h-max h-4/5">
          <Art  {...dt} />
        </div>
        : show === 'past' ? <Past />
          : <Contact />}
      <div className="h-1/8 w-full flex flex-col items-center text-center gap-5 mb-5 cursor-pointer">
        <p onClick={() => show === 'past' ? pastToGalerry() : setShow('past')}>PAST</p>
        <p onClick={() => setShow('contact')}>CONTACT</p>
      </div>
    </div >
  )
}

export default App
