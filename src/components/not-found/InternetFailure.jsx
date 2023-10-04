import pageNotFoundImage from "../../assets/icons/pageNotFound.svg";

const InternetFailure = () => {
  return (
    <>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          minHeight: "80vh",
        }}
      >
        <div style={{ maxWidth: "800px" }}>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h2 align="center">No Internet</h2>

            <div style={{ textAlign: "center" }}>
              <img
                alt="Under development"
                src={pageNotFoundImage}
                style={{
                  marginTop: 40,
                  display: "inline-block",
                  maxWidth: "100%",
                  width: 560,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InternetFailure;
