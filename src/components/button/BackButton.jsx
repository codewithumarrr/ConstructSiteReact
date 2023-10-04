import { useNavigate } from "react-router-dom";



const BackButton = ({ route, label = "Back" }) => {
  const navigate = useNavigate();

  const handleBack = (event) => {
    event.preventDefault();
    navigate(route);
  };

  return (
    <>
      <button
        onClick={handleBack}
        style={{
          height: "8vh",
          borderRadius: 4,
          textAlign: "center",
          backgroundColor: '#2196F3',
          color: 'white',
          padding: '10px 20px',
          cursor: 'pointer',
          outline: 'none',
          transition: 'background-color 0.3s ease-in-out',

        }}
      >
        {label}
      </button>
    </>
  );
};

export default BackButton;
