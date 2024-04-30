import UserHeader from "../compenents/UserHeader"
import UserPost from "../compenents/UserPost"
 const UserPage = () => {
    return (
      <>
        <UserHeader/>
        <UserPost likes={1200} replies={123} postImg={'/post1.png'} postTitle="ki hall jatta"/>
        <UserPost likes={1200} replies={123} postImg={'/post2.png'} postTitle="ki hall jatta"/>
        <UserPost likes={1200} replies={123} postImg={'/post3.png'} postTitle="ki hall jatta"/>
        <UserPost likes={1200} replies={123} postTitle="ki hall jatta"/>
       
        </>
    )
  }
  
  export default UserPage  
  