import { Parallax } from "react-parallax";

const Cover = ({ img, title, paragraph }) => {
  return (
    <Parallax 
        blur={{ min: -50, max: 20 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
      <div className="hero h-120 mb-12">
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">{paragraph}</p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
