import React, {useState, useEffect} from 'react'
import axios from 'axios'
import style from './video.module.css'
import VideoCard from './VideoCard';
import HorizontalScroll from 'react-scroll-horizontal'
function VideoComponent() {


    const [isLoaded, setLoaded] = useState(false);
    const [socials, setSocials] = useState([]);
   

    useEffect(() => {
        async function getVideoData(){
            const response = await axios.get(`https://www.plugco.in/public/take_home_sample_feed`)
                    setLoaded(true)
                    setSocials(response.data.campaigns)
                    console.log(response.data.campaigns)
        }
        getVideoData()
    }, [])
    if(!isLoaded){
        return (<div>Loading...</div>)
    }
    else{

        return (
            <div >
               
                    {
                       socials.map((social, index) =>
                       ( 
                        <div className={style.cover}key={index}>
                    <div className={style.socials} >
                        <div className={style.socialItem}>
                            <div className={style.socialImageWrapper}>
                        <img src={social.campaign_icon_url} alt="..." className={style.iconImage}/>
                        </div>
                        <div className={style.campaignName}>
                            <h2>{social.campaign_name}</h2>
                            <div className={style.campaignRating}>
                            <p>{social.pay_per_install}</p>
                            <p> per install</p>
                            </div>
                            </div>
                            </div>
                          
                            
                            <div className={style.cards}>
                            {social.medias.map((media, index) => (
                        
                              <div className={style.card} key={index}>
                                <VideoCard
                                mediaType = {media.media_type}
                                url={media.download_url}
                                imageSource = {media.cover_photo_url}
                                videoLink = {media.tracking_link}
                                downloadLink = {media.download_url}
                                />
        
                                </div>
                               
                            ))}
                             
                            </div>
                            </div>
                            
                           
                    </div>
                       ))
                }
               
            </div>
        )
    }
}
export default VideoComponent