
import { useNavigate } from 'react-router-dom';

const ChatBody = ({ messages, lastMessageRef }) => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem('userName');
    navigate('/');
    window.location.reload();
  };

  return (
    <div className=''>
      <header className="chat__mainHeader ">
        <p>{ "Team Hangout"}</p>
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          Leave
        </button>
      </header>

      <div className="message__container">
      <p className='fixed pt-2'>Someone is typing...</p>
        {messages.map((message) =>
          message.name === localStorage.getItem('userName') ? (
            <div className="message__chats" key={message.id}>
              <p className="sender__name">You</p>
              <div className="message__sender">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={message.id}>
              <p>{message.name}</p>
              <div className="message__recipient">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}

        <div className="message__status">
       
          {/* <p>{typingStatus}</p> */}
        </div>
        <div ref={lastMessageRef} />
      </div>
    </div>
  );
};

export default ChatBody;


