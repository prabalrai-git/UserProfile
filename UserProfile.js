import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import React from 'react';
import {MdEmail, MdWork, MdEdit} from 'react-icons/md'
import {FaAddressCard} from 'react-icons/fa'

const profileImage = {
   
        position:'absolute',
        top: '80px',
        left:'600px',
        border: '8px solid rgb(255 255 255)',
        padding: '10px'
        
      
}
const profileInformation = {
    display:'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '40%',
    marginTop: '90px',
    fontSize: '25px',
    padding: '50px 162px'
}
const editIcon = {
   
    border: '3px solid black',
    padding: '10px',
    fontSize: '32px',
    background: 'skyblue',
    color: 'black',
    padding: '2px',
    borderRadius: '10%',
    float : 'right',
    marginBottom: '20px' 
}

const profileContainer = {
    width:'100%',
    background: 'rgb(120,201,250)',
    background: 'linear-gradient(90deg, rgba(120,201,250,1) 38%,rgb(202 200 231) 100%)',
    height:'250px'
}
const mainContainer = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'column'
}

const spanStyling = {
    fontSize: '16px',
    fontWeight: '600',
    letterSpacing: '1.5px',
    marginBottom: '4px'
}

const generalIcons = {
    fontSize: '25px',
    marginRight: '9px',
    marginTop: '2px'
}

const buttonStyle = {
    width: '30%',
    fontSize: '15px',
    backgroundColor: '#4f81ff',
    color: 'white',
    fontWeight: '600',
    borderRadius: '200px',
    marginLeft: '200px',
    marginBottom: '50px' 
}


const UserProfile = () => {
    return (
        <>
        
        <div style={mainContainer}>
        <div style={profileContainer}>
        
        <Avatar size={280} icon={<UserOutlined />}  style={profileImage} />
       
        </div>
        <div style={profileInformation}>
            {/* <a><TbEdit style={editIcon}/></a> */}
            <button style={buttonStyle}><MdEdit/> Edit</button>
            <span style={spanStyling}><h2>Prabal Thulung Rai</h2></span>
            <span style={spanStyling}><MdEmail style={generalIcons}/> Prabalrai7@gmail.com</span>
            <span style={spanStyling}><FaAddressCard style={generalIcons}/>Old-Baneshwor</span>
            <span style={spanStyling}><MdWork style={generalIcons}/> Student</span>
        </div>
        </div>
     
        </>
    )
}


export default UserProfile;