import axios from "axios";
import React from "react";
import {useEffect} from "react";
function JsonServer() {
  useEffect(() => {
    axios.get("https://localhost:3031/users");
  }, []);
  return <div></div>;
}
export default JsonServer;
