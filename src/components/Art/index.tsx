import './Art.css';

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

export const Art = (props: ArtProps) => {
  console.log("props from Art component", props)
  return (
    <>
      <img id="art" src={props.path} alt={props.imgDetails.name ?? "image"} />
      {props.path !== '/images/0.jpg' ? (
        <div className="info-text">
          <p id="info-phone">
            {props.imgDetails?.name}<br />
            {props.imgDetails?.title}<br />
            {props.imgDetails?.year} <br />
            {props.imgDetails?.detail} <br />
            {props.imgDetails?.paper} <br />
            {props.imgDetails?.edition ? `Edition of ${props.imgDetails?.edition}` : ""} <br />
          </p>
          {props.path != '/images/0.jpg' ? (
            <a
              id="about-phone"
              v-if="props.path != '/images/0.jpg'"
              download="about2piano.pdf"
              href="/images/about.pdf"
            >ABOUT
            </a>
          ) : ('')}
          <p id="info-pc">
            {props.imgDetails?.name}<br />
            {props.imgDetails?.title} {props.imgDetails?.year} <br />
            {props.imgDetails?.detail} {props.imgDetails?.paper} <br />
            {props.imgDetails?.edition ? `Edition of ${props.imgDetails?.edition}` : ""}<br /><br />
            {props.path != '/images/0.jpg' ? (
              <a
                id="about-pc"
                download="about2piano.pdf"
                href="/images/about.pdf"
              >ABOUT
              </a>
            ) : ('')}
          </p>
        </div>
      ) : (
        <div>
          <div id="home">
            <p>
              JACOB HOLDT<br />
              LOVE JACOB<br />
              VERNISSAGE FRIDAY 11 NOVEMBER 7-9 PM<br />
              UNTIL 11 FEBRUARY 2023<br />
              7 RUE AMBROISE THOMAS 75009 - PARIS
            </p>
          </div>
          <div id="home-phone">
            <p className="txt">
              JACOB HOLDT<br />
              LOVE JACOB<br />
              VERNISSAGE FRIDAY <br />
              11 NOVEMBER 7-9 PM<br />
              UNTIL 11 FEBRUARY 2023<br />
              7 RUE AMBROISE THOMAS <br />
              75009 - PARIS
            </p>
          </div>
        </div>
      )}
    </>
  )
}