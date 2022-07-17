import axios from "axios";
export default function Crud() {
  const getData = async () => {
    await axios
      .get("/api/crud")
      .then((rsp) => rsp.data)
      .catch((e) => {
        throw new Error(e);
      });
  };

  return (
    <div>
      Hola
      <br></br>
      <button onClick={getData}>Get Data</button>
    </div>
  );
}
