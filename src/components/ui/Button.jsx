const defaultStyles = {
  backgroundColor: "#35B8BE",
  color: "#fff",
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  "&:hover": {
    backgroundColor: "#2E9AA3",
  },
};

export default function Button({ children, onClick, styles = {} }) {
  return (
    <button onClick={onClick} style={{ ...defaultStyles, ...styles }}>
      {children}
    </button>
  );
}
