const chats = [
    {
      isGroupChat: false,
      users: [
        {
          name: "John Doe",
          email: "john@example.com",
        },
        {
          name: "Piyush",
          email: "piyush@example.com",
        },
      ],
      _id: "617a077e18c25468bc7c4dd4",
      chatName: "John Doe",
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Guest User",
          email: "guest@example.com",
        },
        {
          name: "Piyush",
          email: "piyush@example.com",
        },
      ],
      _id: "617a077e18c25468b27c4dd4",
      chatName: "Guest User",
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Anthony",
          email: "anthony@example.com",
        },
        {
          name: "Piyush",
          email: "piyush@example.com",
        },
      ],
      _id: "617a077e18c2d468bc7c4dd4",
      chatName: "Anthony",
    },
    {
      isGroupChat: true,
      users: [
        {
          name: "John Doe",
          email: "jon@example.com",
        },
        {
          name: "Piyush",
          email: "piyush@example.com",
        },
        {
          name: "Guest User",
          email: "guest@example.com",
        },
      ],
      _id: "617a518c4081150716472c78",
      chatName: "Friends",
      groupAdmin: {
        name: "Guest User",
        email: "guest@example.com",
      },
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Jane Doe",
          email: "jane@example.com",
        },
        {
          name: "Piyush",
          email: "piyush@example.com",
        },
      ],
      _id: "617a077e18c25468bc7cfdd4",
      chatName: "Jane Doe",
    },
    {
      isGroupChat: true,
      users: [
        {
          name: "John Doe",
          email: "jon@example.com",
        },
        {
          name: "Piyush",
          email: "piyush@example.com",
        },
        {
          name: "Guest User",
          email: "guest@example.com",
        },
      ],
      _id: "617a518c4081150016472c78",
      chatName: "Chill Zone",
      groupAdmin: {
        name: "Guest User",
        email: "guest@example.com",
      },
    },
  ];








// const chats = [
//     {
//       id: 1,
//       sender: 'Alice',
//       message: 'Hi Bob!',
//       timestamp: new Date('2023-10-01T10:00:00'),
//     },
//     {
//       id: 2,
//       sender: 'Bob',
//       message: 'Hello Alice!',
//       timestamp: new Date('2023-10-01T10:05:00'),
//     },
//     {
//       id: 3,
//       sender: 'Alice',
//       message: 'How are you today?',
//       timestamp: new Date('2023-10-01T10:10:00'),
//     },
//     {
//       id: 4,
//       sender: 'Bob',
//       message: 'I am doing well, thanks for asking!',
//       timestamp: new Date('2023-10-01T10:15:00'),
//     },
//     {
//       id: 5,
//       sender: 'Alice',
//       message: 'That\'s great to hear!',
//       timestamp: new Date('2023-10-01T10:20:00'),
//     },
//     {
//       id: 6,
//       sender: 'Bob',
//       message: 'What have you been up to lately?',
//       timestamp: new Date('2023-10-01T10:25:00'),
//     },
//     {
//       id: 7,
//       sender: 'Alice',
//       message: 'Not much, just working on some projects.',
//       timestamp: new Date('2023-10-01T10:30:00'),
//     },
//     {
//       id: 8,
//       sender: 'Bob',
//       message: 'Sounds productive!',
//       timestamp: new Date('2023-10-01T10:35:00'),
//     },
//   ];
  
  module.exports = chats;
  