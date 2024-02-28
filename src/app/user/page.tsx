import Image from "next/image";
import userImage from "./user_wulan.jpeg";

const user = {
    name: 'Wulan Maulidiah',
    nim: '2347128038',
    imageSize: 200,
  };
  
  function UserProfile() {
    return (
      <>
        <h1>{user.name}</h1>
        <h1>{user.nim}</h1>
        <Image
          className="avatar"
          src={userImage} //userImage
          alt={'Foto ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
  }

  export default function Profile(){
    return(
        <>
        <h1>Ini Halaman Profile</h1>
        <UserProfile/>
        </>
    )
  }