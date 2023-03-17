const messages = [
  {
    content:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    userId: 6,
    recipientId: 19,
  },
  {
    content:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    userId: 20,
    recipientId: 3,
  },
  {
    content:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    userId: 18,
    recipientId: 24,
  },
  {
    content:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    userId: 13,
    recipientId: 23,
  },
  {
    content:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    userId: 44,
    recipientId: 5,
  },
  { content: 'Suspendisse potenti.', userId: 29, recipientId: 38 },
  {
    content: 'Nunc rhoncus dui vel sem. Sed sagittis.',
    userId: 14,
    recipientId: 7,
  },
  {
    content:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    userId: 49,
    recipientId: 45,
  },
  {
    content:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    userId: 4,
    recipientId: 35,
  },
  {
    content:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    userId: 8,
    recipientId: 47,
  },
  {
    content:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    userId: 16,
    recipientId: 29,
  },
  {
    content:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    userId: 1,
    recipientId: 22,
  },
  {
    content: 'Vestibulum sed magna at nunc commodo placerat.',
    userId: 26,
    recipientId: 10,
  },
  {
    content:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    userId: 17,
    recipientId: 12,
  },
  {
    content:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    userId: 26,
    recipientId: 49,
  },
  {
    content:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    userId: 17,
    recipientId: 44,
  },
  {
    content:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    userId: 30,
    recipientId: 49,
  },
  {
    content:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    userId: 14,
    recipientId: 34,
  },
  {
    content:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    userId: 2,
    recipientId: 32,
  },
  {
    content:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    userId: 23,
    recipientId: 22,
  },
  {
    content:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    userId: 37,
    recipientId: 30,
  },
  { content: 'Nam nulla.', userId: 29, recipientId: 49 },
  {
    content:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    userId: 18,
    recipientId: 35,
  },
  {
    content: 'Sed vel enim sit amet nunc viverra dapibus.',
    userId: 48,
    recipientId: 48,
  },
  {
    content:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    userId: 12,
    recipientId: 36,
  },
  {
    content:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    userId: 20,
    recipientId: 49,
  },
  {
    content:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    userId: 26,
    recipientId: 32,
  },
  {
    content:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    userId: 2,
    recipientId: 8,
  },
  { content: 'Nunc purus. Phasellus in felis.', userId: 47, recipientId: 33 },
  {
    content:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    userId: 41,
    recipientId: 39,
  },
  {
    content: 'Vivamus in felis eu sapien cursus vestibulum.',
    userId: 24,
    recipientId: 25,
  },
  {
    content:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    userId: 25,
    recipientId: 32,
  },
  {
    content:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    userId: 22,
    recipientId: 13,
  },
  {
    content:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    userId: 32,
    recipientId: 7,
  },
  {
    content:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    userId: 12,
    recipientId: 37,
  },
  {
    content:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    userId: 15,
    recipientId: 33,
  },
  {
    content:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    userId: 48,
    recipientId: 15,
  },
  {
    content: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    userId: 36,
    recipientId: 8,
  },
  {
    content:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    userId: 50,
    recipientId: 4,
  },
  {
    content:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    userId: 20,
    recipientId: 29,
  },
  { content: 'Morbi porttitor lorem id ligula.', userId: 25, recipientId: 37 },
  {
    content: 'Quisque ut erat. Curabitur gravida nisi at nibh.',
    userId: 44,
    recipientId: 35,
  },
  {
    content:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    userId: 31,
    recipientId: 1,
  },
  {
    content:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    userId: 31,
    recipientId: 5,
  },
  {
    content:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    userId: 43,
    recipientId: 16,
  },
  {
    content:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    userId: 31,
    recipientId: 50,
  },
  { content: 'Quisque ut erat.', userId: 24, recipientId: 2 },
  {
    content:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    userId: 33,
    recipientId: 8,
  },
  {
    content:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    userId: 50,
    recipientId: 39,
  },
  {
    content:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    userId: 37,
    recipientId: 21,
  },
  {
    content:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    userId: 28,
    recipientId: 46,
  },
  {
    content:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    userId: 50,
    recipientId: 16,
  },
  {
    content:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    userId: 47,
    recipientId: 27,
  },
  {
    content:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    userId: 3,
    recipientId: 34,
  },
  {
    content:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    userId: 34,
    recipientId: 46,
  },
  { content: 'Proin risus. Praesent lectus.', userId: 20, recipientId: 18 },
  {
    content:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    userId: 4,
    recipientId: 41,
  },
  {
    content:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    userId: 48,
    recipientId: 43,
  },
  { content: 'Nulla justo.', userId: 29, recipientId: 22 },
  {
    content:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    userId: 27,
    recipientId: 25,
  },
];

module.exports = messages;
