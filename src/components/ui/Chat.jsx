import React, { useState } from 'react';
import { ChatEngine, getOrCreateChat } from 'react-chat-engine';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../slices/authSlice';

const Chat = () => {
  const [username, setUsername] = useState('');
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
      <div>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => createDirectChat(creds)}>Create</button>
      </div>
    );
  }

  return (
    <>
      {user ? (
        <ChatEngine
          projectID="88a2e771-cc61-4355-ae54-ab980b1f3afa"
          userName={user}
          userSecret="secret"
          renderNewChatForm={(creds) => renderChatForm(creds)}
          style={{ height: '100%' }}
        />
      ) : (
        <>Not Found</>
      )}
    </>
  );
};

export default Chat;
