// import  { useContext } from "react";
// import { ProfileDetail } from "../../helper/context";

export const H1Title = ({
  title,
  alignx = "center",
}) => {

  return (
    <>
      <h1
        style={{
          fontSize: { xs: "1.2rem", sm: "1.7rem", md: "2.5em" },
          display: "flex",
          width: "100%",
          justifyContent: alignx,
          alignItems: "center",
          background: "transparent",
          verticalAlign: "baseline",
          color: "textColor.main",
          lineHeight: 2,
        }}
      >
        {title}
      </h1>
    </>
  );
};

export const H2Title = ({ title, alignx = "center", colorx = "textColor.main" }) => {
  // const { activeLang } = useContext(ProfileDetail);
  return (
    <>
      <h2
      
        style={{
          display: "flex",
          width: "100%",
          justifyContent: alignx,
          background: "transparent",
          verticalAlign: "baseline",
          lineHeight: "1.5em",
          textAlign: "center",
          fontSize: { xs: "1.1rem", sm: "1rem", md: "1.2rem" },
          color: colorx,
        }}
      >
        {title}
      </h2>
    </>
  );
};

export const H3Title = ({ title, alignx = "center", colorx ="textColor.main"}) => {
  // const { activeLang } = useContext(ProfileDetail);
  return (
    <>
      <h3
        style={{
          lineHeight: "2em",
          display: "flex",
          width: "100%",
          justifyContent: alignx,
          background: "transparent",
          margin: "auto",
          px: 3,
          verticalAlign: "baseline",
          color: colorx,
          fontFamily:"AF"
        }}
      >
        {title}
      </h3>
    </>
  );
};

export const H4Title = ({ title, alignx = "center", colorx = "textColor.main" }) => {
  // const { activeLang } = useContext(ProfileDetail);
  return (
    <>
      <h4
        style={{
          lineHeight: "1.5em",
          textAlign: alignx,
          display: "flex",
          width: "100%",
          justifyContent: alignx,
          background: "transparent",
          border: 0,
          margin: 0,
          outline: 0,
          padding: 0,
          verticalAlign: "baseline",
          mb: 2,
          color: colorx,
        }}
      >
        {title}
      </h4>
    </>
  );
};
export const GetStartBtn = ({
  title,
  onclick,
  heightx = "47px",
  iconx,
  onClickBtn,
}) => {


  return (
    <>
      <button
        style={{
          borderRadius: "25px 25px 25px 25px",
          minHeight: heightx,
          boxShadow: 0,
          minWidth: 0,
          height: heightx,
          border: 0,
          color:"white",
          backgroundColor: "orangeColor.main",
          width: { xs: "160px", sm: "200px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
        onClick={onClickBtn}
      >
        <h3
          variant="h3"
          
        >
          {title}
        </h3>
        {iconx}
      </button>
    </>
  );
};
