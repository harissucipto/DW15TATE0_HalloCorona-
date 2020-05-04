import React from "react";
import { useHistory } from "react-router-dom";
import { Card } from "@material-ui/core";

const url = "artikel1.png";

const ItemArtikel = ({ title, description, label = [], id }) => {
  const history = useHistory();
  const handleNavigate = (id) => () => history.push(`/detail-artikel/${id}`);

  return (
    <Card
      variant="outlined"
      style={styles.container}
      onClick={handleNavigate(id)}
    >
      <div
        style={{
          ...styles.image,
          backgroundImage: url && `url("${require(`../images/${url}`)}")`,
        }}
      />
      <h1>{title}</h1>
      <p>{String(description).substr(0, 200) + "..."}</p>
      {
        // label
        // <div>
        //   {label.map((item, index) => (
        //     <Chip label={item} key={index} />
        //   ))}
        // </div>
      }
    </Card>
  );
};

const styles = {
  container: {
    padding: "10px",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "16em",
    backgroundColor: "grey",
    backgroundSize: "cover",
    repeat: "no-repeat",
    marginBottom: "13px",
  },
};

export default ItemArtikel;
