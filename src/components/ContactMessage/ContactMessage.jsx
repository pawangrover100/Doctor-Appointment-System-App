import LocationMap from "./LocationMap";
import MessageForm from "./MessageForm";

import("./ContactMessage.css");

const ContactMessage = () => {
  return (
    <>
      <div className="row message-container">
        <div className="col-md-4">
          <LocationMap />
        </div>
        <div className="col-md-6">
          <MessageForm />
        </div>
      </div>
    </>
  );
};

export default ContactMessage;
