import React, { useState } from 'react';
import { ChatEngine, getOrCreateChat } from 'react-chat-engine';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../slices/authSlice';
import { useLocation } from 'react-router-dom';

const Chat = () => {
  const location = useLocation();
  const [username, setUsername] = useState(location.state.userName);
  const { userAuth } = useSelector(selectAuth);
  const user = userAuth.userName;

  function createDirectChat(creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername('')
    );
  }

  function renderChatForm(creds) {
    return (
      <div style={{ height: '85vh' }}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => createDirectChat(creds)}>Create</button>
      </div>
    );
  }
  // const height =
  return (
    <div className="bg-cover bg-no-repeat bg-[url('img/profile-bg.jpg')] h-[calc(100vh_-_5rem)]">
      {user ? (
        <div>
          <ChatEngine
            projectID="88a2e771-cc61-4355-ae54-ab980b1f3afa"
            userName={user}
            userSecret="secret"
            renderNewChatForm={(creds) => renderChatForm(creds)}
            // style={{ height: '100vh' }}
          />
        </div>
      ) : (
        <>Not Found</>
      )}
    </div>
  );
};

export default Chat;
