const MyMessage = ({ message }) => {
  if (message?.attachment?.length > 0) {
    return (
      <img
        src={message?.attachment[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }
  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#2acbfc",
      }}
    >
      {message.text}
    </div>
  );
};
export default MyMessage;
