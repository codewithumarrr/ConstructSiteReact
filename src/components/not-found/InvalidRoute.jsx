
import pageNotFoundImage from "../../assets/icons/pageNotFound.svg";
import BackButton from "../button/backButton";

const InvalidRoute = () => {
  return (
    <>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <div style={{maxWidth:"800px"}}>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h2 align="center" style={{color: 'lightblue'}}>
              Page not found
            </h2>

            <p align="center" style={{color: 'lightblue'}}>
              You either tried some shady route or you came here by mistake.
              Whichever it is, try using the navigation
            </p>

            <div style={{ textAlign: "center", mb: 4 }}>
              <img
                alt="Under development"
                src={pageNotFoundImage}
                style={{
                  marginTop: 50,
                  display: "inline-block",
                  maxWidth: "100%",
                  width: 560,
                }}
              />
            </div>

            <BackButton route="/dashboard" label="Go back to Dashboard" />
          </div>
        </div>
      </div>
    </>
  );
};

export default InvalidRoute;
