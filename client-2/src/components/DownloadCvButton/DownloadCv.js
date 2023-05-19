import Link from "next/link";
import Axios from "axios";
import FileDownload from 'js-file-download';
import Button from "../../styles/GlobalComponents/Button";


const DownloadCv = () => {

  const download=(e)=>{
    e.preventDefault()
    Axios({
      url:"http://localhost:4000",
      method:"GET",
      responseType:"blob"
    }).then((res)=>{
      console.log(res);
      FileDownload(res.data,"christianCv.pdf")
    })
  }
  return(
  <>
  <Button  onClick={(e)=> download(e)} >Get my CV</Button>
  </>
  );

}
 

export default DownloadCv;
