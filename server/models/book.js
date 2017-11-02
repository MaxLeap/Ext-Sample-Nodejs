const _ = require("lodash");

const books = [
    {
        id:1,
        title:'book1',
        price:12.5
    },
    {
        id:2,
        title:'book2',
        price:20
    },
    {
        id:3,
        title:'book3',
        price:24.5
    },
    {
        id:4,
        title:'book4',
        price:62.5
    },
    {
        id:5,
        title:'book5',
        price:18.5
    },
    {
        id:6,
        title:'book6',
        price:39
    }
];

// 创建
function create(book) {
    books.push(book);
    return book;
}

// 列表
function list() {
    return books;
}

// 根据 id 获取 book
function getBookById(id) {
    return _.find(books, function (book) {
        return book.id == id;
    });
}

// 更新 book
function update(book,id) {
    const index = _.findIndex(books, function (book) {
        return book.id == id;
    });
    if (index == -1) {
        // 没找到
        return null
    } else {
        books[index] = book;
        return book;
    }
}

// 删除 book
function deleteById(id) {
    return _.remove(books, function (book) {
        return book.id == id
    })
}

module.exports ={
    create,
    list,
    getBookById,
    update,
    deleteById
}