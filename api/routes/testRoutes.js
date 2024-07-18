import { Router } from 'express';
import { faker } from '@faker-js/faker';
import Author from '../models/books/Author.js';
import Reader from '../models/books/Reader.js';
import Book from '../models/books/Book.js';
import Comment from '../models/books/Comment.js';

const testRouter = Router();

const AUTHOR_COUNT = 30;
const READER_COUNT = 30;
const BOOK_COUNT = 30;
const COMMENT_COUNT = 30;

const createFakeUser = () => {
  return {
    nickname: faker.internet.userName(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    isActive: faker.datatype.boolean(),
    gender: faker.helpers.arrayElement(['male', 'female', 'other']),
    avatar: faker.image.avatar(),
  };
};

const createFakeAuthor = () => {
  return {
    ...createFakeUser(),
    biography: faker.lorem.paragraph(),
  };
};

const createFakeReader = () => {
  return {
    ...createFakeUser(),
    isSuscribed: faker.datatype.boolean(),
  };
};

const createFakeBook = (authorIds) => {
  return {
    title: faker.lorem.sentence(),
    synopsis: faker.lorem.paragraph(),
    author: faker.helpers.arrayElement(authorIds),
    score: faker.datatype.number({ min: 0, max: 10 }),
    genre: faker.helpers.arrayElement([
      'Fantasy',
      'Science Fiction',
      'Mystery',
      'Romance',
      'Thriller',
    ]),
    content: faker.lorem.paragraphs(),
    cover: faker.image.imageUrl(),
  };
};

const createFakeComment = (userIds, bookIds) => {
  return {
    user: faker.helpers.arrayElement(userIds),
    book: faker.helpers.arrayElement(bookIds),
    comment: faker.lorem.sentences(),
  };
};

testRouter.get('/faker', async (req, res) => {
  let authorArray = [];
  let readerArray = [];
  let bookArray = [];
  let commentArray = [];

  for (let i = 0; i < AUTHOR_COUNT; i++) {
    authorArray.push(Author.create(createFakeAuthor()));
  }

  const authors = await Promise.all(authorArray);

  const authorIds = authors.map((author) => author._id);

  for (let i = 0; i < BOOK_COUNT; i++) {
    bookArray.push(Book.create(createFakeBook(authorIds)));
  }

  const books = await Promise.all(bookArray);

  for (let i = 0; i < READER_COUNT; i++) {
    readerArray.push(Reader.create(createFakeReader()));
  }

  const readers = await Promise.all(readerArray);

  const readersId = readers.map((reader) => reader._id);
  const bookIds = books.map((book) => book._id);

  for (let i = 0; i < COMMENT_COUNT; i++) {
    commentArray.push(Comment.create(createFakeComment(readersId, bookIds)));
  }

  const comments = await Promise.all(commentArray);

  return res.json({
    msg: 'DB',
    authors: authors.length,
    readers: readers.length,
    books: books.length,
    comments: comments.length,
  });
});

export default testRouter;
