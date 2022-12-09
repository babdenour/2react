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
  fn: Function
}

export const Art = (props: any) => {

  return (
    <div className="flex flex-col h-[67vh] lg:h-full justify-center items-center text-center w-4/5 m-auto">
      <img className="max-h-[50vh] lg:max-h-full w-[45vh] mb-5 cursor-pointer"
        onClick={props.fn} src={props.data?.path} alt={props.data.imgDetails?.name ?? "image"} />
      {props.data.path !== '/images/0.jpg' ? (
        <div className="">
          <p id="info-phone" className="block lg:hidden">
            {props.data.imgDetails?.name}<br />
            {props.data.imgDetails?.title}
            {props.data.imgDetails?.year} <br />
            {props.data.imgDetails?.detail}
            {props.data.imgDetails?.paper}
            {props.data.imgDetails?.edition ? `Edition of ${props.data.imgDetails?.edition}` : ""} <br /><br />
            {props.data.path != '/images/0.jpg' ? (
              <a className="block lg:hidden cursor-pointer"
                download="about2piano.pdf"
                href="/images/about.pdf"
              >ABOUT
              </a>
            ) : ('')}
          </p>
          <p id="info-pc" className="hidden lg:block">
            {props.data.imgDetails?.name}<br />
            {props.data.imgDetails?.title}
            {props.data.imgDetails?.year} <br />
            {props.data.imgDetails?.detail}
            {props.data.imgDetails?.paper} <br />
            {props.data.imgDetails?.edition ? `Edition of ${props.data.imgDetails?.edition}` : ""}<br /><br />
            {props.data.path != '/images/0.jpg' ? (
              <a
                className="hidden lg:block cursor-pointer"
                download="about2piano.pdf"
                href="/images/about.pdf"
              >ABOUT
              </a>
            ) : ('')}
          </p>
        </div>
      ) : (
        <>
          <p className="hidden lg:block">
            JACOB HOLDT<br />
            LOVE JACOB<br />
            VERNISSAGE FRIDAY 11 NOVEMBER 7-9 PM<br />
            UNTIL 11 FEBRUARY 2023<br />
            7 RUE AMBROISE THOMAS 75009 - PARIS
          </p>
          <p className="block lg:hidden">
            JACOB HOLDT<br />
            LOVE JACOB<br />
            VERNISSAGE FRIDAY <br />
            11 NOVEMBER 7-9 PM<br />
            UNTIL 11 FEBRUARY 2023<br />
            7 RUE AMBROISE THOMAS <br />
            75009 - PARIS
          </p>
        </>
      )}
    </div>
  )
}