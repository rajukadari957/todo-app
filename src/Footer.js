function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1a1a1a",
        color: "#f1f1f1",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap", // Makes it responsive on smaller screens
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <div style={{ margin: "10px" }}>
          <strong>Ourkids Pet Care</strong>
          <br />
          Yelahanka, Bangalore
        </div>
        <div style={{ margin: "10px" }}>
          <strong>Canaan Pet Resort</strong>
          <br />
          Kannur, Bangalore
        </div>
        <div style={{ margin: "10px" }}>
          <strong>The SouthPaws Pet Resort</strong>
          <br />
          Sus Road, Pune
        </div>
      </div>
      <div
        style={{
          marginTop: "30px",
          textAlign: "center",
          fontSize: "0.9rem",
          color: "#aaa",
        }}
      >
        © 2025 Pet Care. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;