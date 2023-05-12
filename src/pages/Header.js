export default function Header(props) {
    return (
      <h2
        style={{ border: "solid 2px blue", margin: "1px", textAlign: "center" }}
      >
        {props.title}
      </h2>
    );
  }
  