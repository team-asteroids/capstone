import React from 'react';

const Sort = () => {
  const data = [
    {
      createdAt: '2023-03-20T09:59:29.265Z',
      updatedAt: '2023-03-30T09:59:28.265Z',
      userId: 32,
      postCommentId: 57,
    },
    {
      createdAt: '2023-03-30T09:59:28.265Z',
      updatedAt: '2023-03-30T09:59:28.265Z',
      userId: 42,
      postCommentId: 58,
    },
    {
      createdAt: '2023-03-20T08:59:20.265Z',
      updatedAt: '2023-03-20T09:59:28.265Z',
      userId: 49,
      postCommentId: 56,
    },
  ];

  const sortedData = data.sort((a, b) => {
    const timeA = a.createdAt;
    const timeB = b.createdAt;
    if (timeA < timeB) {
      return 1;
    }
    if (timeA > timeB) {
      return -1;
    }
    return 0;
  });

  return (
    <div className="bg-[url('img/page-not-found-bg.jpg')] h-[calc(100vh_-_5rem)] bg-center w-screen bg-no-repeat bg-cover">
      <div>
        {sortedData.map((post) => (
          <div>{post.createdAt} </div>
        ))}
      </div>
    </div>
  );
};

export default Sort;
