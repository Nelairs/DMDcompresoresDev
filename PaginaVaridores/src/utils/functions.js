import axios from "axios";

export  function getDataBase() {
      axios.get("http://175.10.0.166:8080/api/variadores").then((res)  => {
        let data =  res.data;
        console.log(data)
        return  data
      });
    }
    
