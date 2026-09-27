import ContactMeassage from '../components/ContactMessage/ContactMessage.jsx'

const Contact = () => {
  return (
    <div>
       <div className="d-flex mt-5 justify-content-center">
    <h6><i className="fa-solid fa-phone ms-3"></i>Emergency Call: 789654123 </h6>
    <h6><i className="fa-solid fa-clock ms-3"></i>10:00 AM to 5:00 PM</h6>
    <h6><i className="fa-regular fa-envelope ms-3"></i>Sample@gmail.com</h6>
    <h6><i className="fa-solid fa-globe ms-3"></i>English</h6>
   </div>
      <ContactMeassage />
    </div>
  )
}

export default Contact