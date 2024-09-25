import React, { useState } from "react";
import { ReactComponent as Letter } from "../assets/images/letter_send.svg";
import { ReactComponent as Letter2 } from "../assets/images/letter_send2.svg";
import styles from "./Contact.module.scss";
import axios from "axios";
import ChangLang from "../utility/ChangLang";
const Contact = () => {
  const { t, direction } = ChangLang();
  const baseUrl = "http://emc2db-001-site1.itempurl.com";
  const urlPost = "/api/ContactUs/AddContact";
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [message,setMessage]=useState("")

  const onhandelName=(e)=>{
    setName(e.target.value)
  }
  const onhandelEmail=(e)=>{
    setEmail(e.target.value)
  }
  const onhandelPhone=(e)=>{
    setPhone(e.target.value)
  }
  const onhandelMessage=(e)=>{
    setMessage(e.target.value)
  }
  const handelSubmit = (e) => {
    e.preventDefault();
    const formData=new FormData()
    formData.append('name',name)
    formData.append('email',email)
    formData.append('phone',phone)
    formData.append('message',message)
    axios.post(`${baseUrl}${urlPost}`,formData).then(res=>{
      console.log(res.data);
    }).catch(err=>console.log(err)
    )
    setName('')
    setEmail('')
    setPhone('')
    setMessage('')
  };

  return (
    <div className={styles.container} dir={direction}>
      <div className={styles.contact}>
        <div className={styles.text_arrow}>
          <div className={styles.text}>
            <p className={styles.p1}>
             {t("contactUs.form.title")}
            </p>
            <p className={styles.p2}>
            {t("contactUs.form.sub_title")}
            </p>
          </div>
          <Letter className={styles.arrow1}/>
        </div>
        <div className={styles.form_div}>
          <form onSubmit={handelSubmit}>
            <label htmlFor="name">{t("contactUs.form.name")}</label>
            <input type="text" placeholder="" id="name" onChange={onhandelName} value={name}/>
            <label htmlFor="email">{t("contactUs.form.email")}</label>
            <input type="email" placeholder="" id="email" onChange={onhandelEmail} value={email}/>
            <label htmlFor="Phone">{t("contactUs.form.phone")}</label>
            <input type="text" placeholder="" id="Phone" onChange={onhandelPhone} value={phone}/>
            <label htmlFor="message">{t("contactUs.form.message")}</label>
            <textarea name="message" id="message" onChange={onhandelMessage} value={message}/>
            <button>{t("contactUs.form.submit")}</button>
          </form>
          <Letter2 className={styles.letter} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
