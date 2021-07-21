import React, {useState} from 'react'
import ReactPlayer from 'react-player/lazy'
import cardStyles from './video.module.css'
import {RiDownloadLine} from 'react-icons/ri'
import {HiOutlineLink} from 'react-icons/hi'
import CopyToClipboard from 'react-copy-to-clipboard'
import FileSaver from 'file-saver'



const VideoCard =(props) =>{
const [copiedText, setCopiedText] = useState(false)

    const copyToClipboard = () =>{
        setCopiedText(true);
        alert("Link Copied")
    }

    const saveFile =() => {
        FileSaver.saveAs(
            process.env.PUBLIC_URL + props.downloadLink,
            "video.mp4");
    }

    return (
            <div >  
                             
               <ReactPlayer 
               url={props.url} 
               width="100%" 
               height="350px" 
               light={props.imageSource}
                playing
               />
               <div className={cardStyles.bottomIcon}>
                   <CopyToClipboard text={props.videoLink} onCopy={copyToClipboard}>
                   <HiOutlineLink className={cardStyles.linkIcon} />
                   </CopyToClipboard>
                   
                <RiDownloadLine className={cardStyles.downloadIcon} onClick={(e) => saveFile()}/>
               </div>
            </div>
            
    )
}


export default VideoCard