// import the StreamChat client
import { StreamChat } from 'stream-chat';

// // if you're using common js
// const StreamChat = require('stream-chat').StreamChat;

// Instantiate your stream client using the API key and secret
// the secret is only used server side and gives you full access to the API
const serverClient = StreamChat.getInstance('API_KEY','API_SECRET');

// generate a token for the educator
const educatorUserId = 'educator';
const educatorToken = serverClient.createToken(educatorUserId);
// Copy this token from console to use in APP
console.log('EducatorToken : ', educatorToken);
// upsert the educator to the stream database
serverClient.upsertUsers([{ 
    id: educatorUserId, 
    role: 'admin', 
    name: 'Educator',
 }]);
 console.log('EducatorToken : ', educatorToken);

// generate a token for the student
const studentUserId = 'student';
const studentToken = serverClient.createToken(studentUserId);
// Copy this token from console to use in APP
console.log('StudentToken : ', studentToken);
// upsert the student to the stream database
serverClient.upsertUsers([{ 
    id: studentUserId, 
    role: 'user', 
    name: 'Student',
 }]);

