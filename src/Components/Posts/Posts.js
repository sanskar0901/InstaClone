import React from 'react'
import Card from './card'
import Styles from './Posts.module.css'





function Posts() {
    // const [Post, setPost] = useState([
    //     {
    //         profilepic: "img",
    //         username: "TheDogsLover",
    //         location: "London",
    //         postimg: "https://www.thesprucepets.com/thmb/wpN_ZunUaRQAc_WRdAQRxeTbyoc=/4231x2820/filters:fill(auto,1)/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg",
    //         likes: 100,
    //         caption: "Sooooo Cuteee",
    //         comments: [
    //             {
    //                 username: "thedog",
    //                 comment: "So cuteeeee"
    //             },
    //             {
    //                 username: "thedog",
    //                 comment: "So Cutieee ❤❤❤❤❤❤"
    //             },
    //             {
    //                 username: "_the_King",
    //                 comment: "Too cute ❤️❤️"
    //             }

    //         ]
    //     }
    // ])
    // console.log(Post);
    return (
        <div className={Styles.majorcontainer}>

            <Card />
            <Card />
            <Card />




        </div >
    )
}

export default Posts
